🚀 AnonyTalk – Secure and Anonymous Chat Platform








AnonyTalk is a real-time anonymous chat application with a visually appealing frontend and a backend built using Node.js, Express, MongoDB, and Socket.IO.

The app supports:

💬 Real-time chat

🎨 Anonymous usernames with random colors

⌨️ Typing indicators & online user count

😄 Emoji picker & message reactions

🎉 Confetti & milestone notifications

🌗 Light & Dark themes

🔔 Audio notifications (send, receive, milestone)

The backend is deployed on Render, making it accessible anywhere without running locally.

📑 Table of Contents

Features

Folder Structure

Installation

Backend Setup

Frontend Setup

Render Deployment

Linking Existing Prototype

Environment Variables

Running Locally

License

Credits

✨ Features

💬 Real-time chat with Socket.IO

👤 Anonymous usernames with random colors

⌨️ Typing indicators & online user count

😄 Emoji picker & message reactions

🎉 Confetti & milestone notifications

🌗 Light & Dark themes

🔔 Audio notifications (send, receive, milestone)

🌐 Backend deployed live on Render

📂 Folder Structure
anony-talk/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── chat.html
│   ├── chat.css
│   └── chat.js
│
└── README.md

⚙️ Installation

Clone the repository:

git clone https://github.com/aash735/anonytalk-backend.git
cd anonytalk-backend


Install dependencies:

npm install

🖥️ Backend Setup

Create a .env file in the backend folder with your MongoDB connection string and port:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run backend locally (optional for development):

npm run dev  # or node server.js


Local server will run at: http://localhost:5000

🌐 Frontend Setup

Ensure frontend folder is inside the backend directory:

backend/
└── frontend/
    ├── chat.html
    ├── chat.css
    └── chat.js


Update Socket.IO URL in chat.js:

const socket = io('https://anonytalk-backend-1.onrender.com'); // Render URL


Open chat.html in a browser to test the frontend locally.

🚀 Render Deployment

Connect your GitHub repository to Render.

Set Build Command and Start Command:

Build: npm install
Start: node server.js


Ensure frontend is served correctly in server.js:

app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/chat.html'));
});


Render will assign a dynamic port using process.env.PORT.

Access your live app: 🌐 AnonyTalk Live

🔗 Linking Existing Prototype

In your existing prototype’s chat.js or HTML, update Socket.IO connection:

const socket = io('https://anonytalk-backend-1.onrender.com');


Update any API calls to the Render URL:

fetch('https://anonytalk-backend-1.onrender.com/api/auth/login', {...})


Your prototype will now communicate with the live backend seamlessly. ✅

🛠️ Environment Variables

MONGO_URI – MongoDB connection string

PORT – Backend port (Render sets automatically)

Keep credentials secure in .env or Render secrets.

🏃 Running Locally
# Install dependencies
npm install

# Run backend server
npm run dev   # or node server.js

# Open frontend
open frontend/chat.html

📄 License

This project is licensed under the MIT License.
MIT License

🎨 Credits

Backend: Node.js, Express, Socket.IO, MongoDB, Mongoose

Frontend: HTML, CSS, JavaScript

Deployment: Render
