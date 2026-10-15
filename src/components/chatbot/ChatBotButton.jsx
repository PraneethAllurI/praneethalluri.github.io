import React from "react";

const ChatBotButton = ({ toggleChat }) => {
  return (
    <button
      className="btn btn-primary rounded-circle position-fixed"
      style={{
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        fontSize: "24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: "1000",
      }}
      onClick={toggleChat}
    >
      💬
    </button>
  );
};

export default ChatBotButton; 
