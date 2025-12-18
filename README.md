AnonyTalk – Secure and Anonymous Chat Platform

AnonyTalk is a real-time anonymous chat application with a visually appealing frontend and a backend built using Node.js, Express, MongoDB, and Socket.IO. The app supports emoji reactions, typing indicators, online user count, themes, and milestone/confetti notifications.

The backend is deployed on Render, making it accessible anywhere without running locally.

Table of Contents

Features

Folder Structure

Installation

Backend Setup

Frontend Setup

Render Deployment

Linking Existing Prototype

Environment Variables

Running Locally

Credits

Features

Real-time chat with Socket.IO

Anonymous usernames with random colors

Typing indicators & online user count

Emoji picker & message reactions

Confetti & milestone notifications

Light & Dark themes

Audio notifications (send, receive, milestone)

Backend deployed live on Render

Folder Structure
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

Installation

Clone the repository:

git clone https://github.com/aash735/anonytalk-backend.git
cd anonytalk-backend


Install dependencies:

npm install

Backend Setup

Create a .env file in the backend folder with:

MONGO_URI=mongodb+srv://aashishmahajan735_db_user:avengers3000@cluster0.iic9epg.mongodb.net/?retryWrites=true&w=majority
PORT=5000


Run backend locally (optional for development):

npm run dev  # or node server.js


Local server will run at http://localhost:5000

Frontend Setup

Ensure frontend folder is inside backend directory:

backend/
└── frontend/
    ├── chat.html
    ├── chat.css
    └── chat.js


Update Socket.IO URL in chat.js:

const socket = io('https://anonytalk-backend-1.onrender.com'); // Render URL


Open chat.html in a browser to test the frontend locally.

Render Deployment

Connect your GitHub repository to Render.

Set Build Command and Start Command:

Build: npm install
Start: node server.js


Ensure frontend is served correctly in server.js:

app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/chat.html'));
});


Render will assign a dynamic port, use process.env.PORT in server.js.

Access your live app:

https://anonytalk-backend-1.onrender.com

Linking Existing Prototype

In your existing prototype’s chat.js or HTML, update Socket.IO connection:

const socket = io('https://anonytalk-backend-1.onrender.com');


Update any API calls to the Render URL:

fetch('https://anonytalk-backend-1.onrender.com/api/auth/login', {...})


Your prototype will now communicate with the live backend seamlessly.

Environment Variables

MONGO_URI – MongoDB connection string

PORT – Backend port (Render sets automatically)

Keep credentials secure in .env or Render secrets.

Running Locally
# Install dependencies
npm install

# Run backend server
npm run dev   # or node server.js

# Open frontend
open frontend/chat.html

Credits

Backend: Node.js, Express, Socket.IO, MongoDB, Mongoose

Frontend: HTML, CSS, JavaScript

Deployment: Render
