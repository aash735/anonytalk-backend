// aiRouter.js
const express = require('express');
const axios = require('axios');

module.exports = (io) => {
  const router = express.Router();

  // ============================
  // POST /api/ai/analyze
  // Sends text to Python AI service for emotion detection
  // ============================
  router.post('/analyze', async (req, res) => {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    try {
      // Python AI service is assumed to run on http://localhost:5005
      const response = await axios.post('http://localhost:5005/analyze', { text });

      // response.data should contain { label, confidence }
      return res.json(response.data);
    } catch (err) {
      console.error('Error calling AI service:', err.message);
      return res.status(500).json({ message: 'AI service error', error: err.message });
    }
  });

  // ============================
  // Socket.IO integration for AI chat
  // ============================
  io.on('connection', (socket) => {
    socket.on('ai-message', async (data) => {
      try {
        const response = await axios.post('http://localhost:5005/analyze', { text: data.message });
        const aiData = {
          user: data.username,
          message: data.message,
          emotion: response.data.label,
          confidence: response.data.confidence,
          timestamp: new Date(),
        };

        // Send AI-analyzed message back to the same socket
        socket.emit('ai-response', aiData);
      } catch (err) {
        console.error('Error in AI Socket:', err.message);
        socket.emit('ai-response', { error: 'AI analysis failed' });
      }
    });
  });

  return router;
};
