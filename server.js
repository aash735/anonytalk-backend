// server.js
const Message = require('./models/Message');

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');

dotenv.config();

console.log("Starting server...");

// ============================
// Create app and server
// ============================
const app = express();           // <-- Make sure this is before any app.use/app.get
const server = http.createServer(app);

// ============================
// Connect to MongoDB
// ============================
connectDB()
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// ============================
// Middleware
// ============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================
// API Routes
// ============================
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// ============================
// Serve Frontend
// ============================
// Serve all static files (HTML, CSS, JS) from frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Chat page (default route)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/chat.html'));
});

// Homepage route
app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/homepage.html'));
});

// ============================
// Socket.IO Setup
// ============================
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Keep track of online users per room
let onlineUsers = {}; // { roomName: Set(socket.id) }

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // ============================
  // Join Room
  // ============================
  socket.on('join-room', async (room) => {
    socket.join(room);

    if (!onlineUsers[room]) onlineUsers[room] = new Set();
    onlineUsers[room].add(socket.id);

    io.to(room).emit('user-count', onlineUsers[room].size);

    try {
      const messages = await Message.find({ room })
        .sort({ createdAt: 1 })
        .limit(100);
      socket.emit('chat-history', messages);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  });

  // ============================
  // Send Message
  // ============================
  socket.on('send-message', async (data) => {
    try {
      const newMessage = new Message({
        room: data.room,
        username: data.username,
        message: data.message,
        color: data.color,
        timestamp: data.timestamp
      });

      await newMessage.save();
      io.to(data.room).emit('message', data);
    } catch (err) {
      console.error('Error saving message:', err);
    }
  });

  // ============================
  // Typing Indicator
  // ============================
  socket.on('typing', (data) => {
    socket.to(data.room).emit('user-typing', data);
  });

  socket.on('stop-typing', (data) => {
    socket.to(data.room).emit('user-stop-typing', data);
  });

  // ============================
  // Disconnect
  // ============================
  socket.on('disconnect', () => {
    for (const room in onlineUsers) {
      if (onlineUsers[room].has(socket.id)) {
        onlineUsers[room].delete(socket.id);
        io.to(room).emit('user-count', onlineUsers[room].size);
      }
    }
    console.log(`User disconnected: ${socket.id}`);
  });
});

// ============================
// Error Handling
// ============================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// ============================
// Start Server
// ============================
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
