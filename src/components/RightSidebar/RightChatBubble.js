import React from "react";

function RightChatBubble({ message, name, image }) {
  return (
    <div className="message-bubble mbr" style={styles.messageBubble}>
      <img src={image} style={styles.avatar} alt="sender-pic" />
      <div className="right-bubble" style={styles.rightBubble}>
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
        <div className="bubble-arrow bubble-arrow-alt" style={styles.bubbleArrow}></div>
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
    margin: "0 10px",
  },
  rightBubble: {
    flex: 1,
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px",
    position: "relative",
    textAlign: "right",
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
    left: "5px",
    color: "#ccc",
  },
  bubbleArrow: {
    position: "absolute",
    right: "-10px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "0",
    height: "0",
    borderTop: "8px solid transparent",
    borderBottom: "8px solid transparent",
    borderLeft: "8px solid #007bff",
  },
};

export default RightChatBubble;
