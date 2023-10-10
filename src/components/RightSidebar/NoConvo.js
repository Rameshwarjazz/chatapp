import React from "react";
import "../stylesheets/rightSidebar.css";

function NoConvo() {
  return (
    <div className="no-chat-background" style={styles.noConvoBackground}>
      <h2 style={styles.heading}>Welcome to the Chat App !!!</h2>
    </div>
  );
}

const styles = {
  noConvoBackground: {
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginTop: "1rem",
  },
};

export default NoConvo;
