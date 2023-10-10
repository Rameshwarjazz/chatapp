import React from "react";

function LeftChatBubble({ message, name, image }) {
  return (
    <div className="message-bubble mbl" style={styles.messageBubble}>
      <img src={image} style={styles.avatar} alt="sender-pic" />
      <div className="left-bubble" style={styles.leftBubble}>
        <div className="text-message">
          <p className="name" style={styles.name}>
            {name}
          </p>
          <p className="message" style={styles.messageText}>
            {message.text}
          </p>
          <span className="message-timestamp" style={styles.timestamp}>
            {message.timestamp}
          </span>
        </div>
        <div className="bubble-arrow" style={styles.bubbleArrow}></div>
      </div>
    </div>
  );
}

const styles = {
  messageBubble: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "16px",
  },
  avatar: {
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    margin: "0 15px",
  },
  leftBubble: {
    flex: 1,
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px",
    position: "relative",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  messageText: {
    fontSize: "14px",
    marginBottom: "4px",
  },
  timestamp: {
    fontSize: "12px",
    position: "absolute",
    bottom: "5px",
    right: "5px",
    color: "#ccc",
  },
  bubbleArrow: {
    position: "absolute",
    left: "-10px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "0",
    height: "0",
    borderTop: "8px solid transparent",
    borderBottom: "8px solid transparent",
    borderRight: "8px solid #007bff",
  },
};

export default LeftChatBubble;
