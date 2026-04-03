# 🚀 Anony Talk – Backend

Complete backend system for **Anony Talk** — an anonymous chat application with real-time messaging, community features, and comprehensive moderation tools.

---

## 🧠 Overview

Anony Talk is a **privacy-first, real-time communication platform** that enables users to interact without revealing their identity.

This backend powers:

* Anonymous authentication
* Real-time chat (1-to-1 & group)
* Community interactions
* Moderation & safety systems

---

## 🚀 Features

* 🔹 **Anonymous User System**

  * UUID-based identity
  * Optional nicknames

* 🔹 **Real-time Chat**

  * Socket.IO powered messaging
  * Typing indicators & live updates

* 🔹 **1-to-1 & Group Chats**

  * Direct messaging
  * Public/private chat rooms

* 🔹 **Community Posts**

  * Share thoughts
  * Interact via upvotes

* 🔹 **Moderation & Safety**

  * Report system
  * Profanity filtering
  * Auto-moderation

* 🔹 **Message Encryption**

  * Optional end-to-end encryption

* 🔹 **Rate Limiting**

  * Protection against spam & abuse

* 🔹 **Auto-expiry**

  * Automatic cleanup of old data

* 🔹 **RESTful API + WebSockets**

  * Structured APIs
  * Real-time bidirectional communication

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Socket.IO
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* UUID
* Helmet (security)
* Express Rate Limit
* Bad Words (profanity filter)
* Express Validator
* Morgan (logging)

---

## 📋 Prerequisites

* Node.js v16 or higher
* MongoDB v5 or higher
* npm or yarn

---

## 🛠️ Installation

### 1. Clone Repository

git clone https://github.com/aash735/anonytalk-backend.git
cd anonytalk-backend

---

### 2. Install Dependencies

npm install

---

### 3. Setup Environment Variables

Create `.env` file:

PORT=5000
NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/anonytalk

JWT_SECRET=your-super-secret-key
ENCRYPTION_KEY=your-32-character-key

ALLOWED_ORIGINS=http://localhost:3000

RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

SESSION_TIMEOUT_HOURS=24

---

### 4. Run Server

Development:
npm run dev

Production:
npm start

Server runs at:
http://localhost:5000

---

## 📂 Project Structure

anony-talk-backend/
├── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── socket/
│   └── utils/
├── server.js
├── .env
├── package.json
└── README.md

---

## 🔌 API Overview

### Authentication

* POST `/api/auth/create-session`
* POST `/api/auth/validate-session`
* PATCH `/api/auth/update-profile`

### Chat

* POST `/api/chat/rooms`
* GET `/api/chat/rooms`
* POST `/api/chat/rooms/:roomId/join`
* POST `/api/chat/rooms/:roomId/leave`

### Messages

* GET `/api/messages/:roomId`
* POST `/api/messages`
* DELETE `/api/messages/:messageId`

### Reports

* POST `/api/reports`

### Community

* POST `/api/community/posts`
* GET `/api/community/posts`
* POST `/api/community/posts/:postId/upvote`

---

## 🔄 Socket.IO Events

### Chat Events

* send_message
* new_message
* typing
* delete_message

### Room Events

* join_room
* leave_room
* get_participants

### User Events

* update_presence
* update_profile

---

## 🔐 Security

* No personal data collection
* Session-based authentication
* JWT-secured communication
* Rate limiting
* Input validation
* HTTPS recommended in production

---

## 🧪 Testing

Example:
curl http://localhost:5000/health

Use:

* Postman
* Insomnia
* Browser console for Socket.IO

---

## 🚀 Deployment

* Use MongoDB Atlas
* Enable HTTPS
* Use PM2 for process management

PM2 Commands:
pm2 start server.js --name anony-talk
pm2 monit
pm2 logs anony-talk

---

## 🐳 Docker (Optional)

FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]

---

## 📝 Common Issues

* MongoDB not running
* Wrong .env configuration
* CORS issues
* Expired sessions

---

## 📌 Project Status

✅ Fully functional backend
🚀 Continuously improving scalability and features

---

## 👨‍💻 Author

Aashish Mahajan
Frontend-Focused Product Developer

---

## 📄 License

MIT License

---

## ❤️ Support

For issues or suggestions, open a GitHub issue.

---

Built with ❤️ for anonymous and safe communication
