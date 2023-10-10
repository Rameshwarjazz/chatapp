import React from "react";
import ContactAvatar from "./ContactAvatar";
import ContactLastMessage from "./ContactLastMessage";
import ContactName from "./ContactName";
import { Link } from "react-router-dom";

function ContactTab(props) {
  const { image, name, chatlog, id } = props.contact;
  const length = chatlog.length;
  const noMessage = {
    text: "0 messages - Say Hi!",
  };

  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="contact-tab" style={styles.contactTab}>
        <div style={styles.avatarContainer}>
          <ContactAvatar image={image} />
        </div>

        <div style={styles.contactInfo}>
          <ContactName name={name} style={styles.contactName} />

          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
            style={styles.lastMessage}
          />
        </div>
      </div>
    </Link>
  );
}

const styles = {
  contactTab: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    borderBottom: "1px solid #e0e0e0",
    textDecoration: "none",
    color: "#333",
    transition: "background-color 0.2s ease",
  },
  avatarContainer: {
    marginRight: "16px",
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  lastMessage: {
    fontSize: "14px",
    color: "#777",
  },
};

export default ContactTab;
