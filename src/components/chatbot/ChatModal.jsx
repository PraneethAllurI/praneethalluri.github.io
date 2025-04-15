// src/components/Chatbot/ChatModal.jsx
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";

const ChatModal = ({ toggleChat }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi there! Ask me anything about my portfolio!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // const res = await axios.post("http://localhost:5000/api/test", {
      //   message: input,
      // });
      const res = await axios.post("https://portfolio-chatbot-backend-wj84.onrender.com/api/test", {
        message: input,
      });

      const botMsg = { sender: "bot", text: res.data.reply || "No response." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const botMsg = { sender: "bot", text: "❌ Error talking to the bot!" };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      className="modal d-block"
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        zIndex: 1050,
        width: "320px",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content shadow">
          <div className="modal-header bg-primary text-white py-2">
            <h6 className="modal-title">Ask about my Portfolio 🤖</h6>
            <button type="button" className="btn-close" onClick={toggleChat}></button>
          </div>
          <div
            className="modal-body"
            style={{ maxHeight: "300px", overflowY: "auto", fontSize: "0.9rem" }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 text-${msg.sender === "bot" ? "secondary" : "primary"}`}>
                <strong>{msg.sender === "bot" ? "Bot" : "You"}:</strong> {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-muted">
                <Spinner animation="border" size="sm" /> Bot is typing...
              </div>
            )}
          </div>
          <div className="modal-footer py-2">
            <Form.Control
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Button variant="primary" onClick={sendMessage} disabled={loading}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
