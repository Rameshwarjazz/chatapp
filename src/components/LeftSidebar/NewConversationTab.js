import React from "react";
import ContactTab from "./ContactTab";

function NewConversationTab({ contacts, showNewConvoTab }) {
  const handleClose = () => {
    showNewConvoTab(false);
  };

  return (
    <div className="new-convo-tab" style={styles.newConvoTab}>
      <div className="nct-header" style={styles.header}>
        <p style={styles.headerText}>Select Contact</p>
        <span style={styles.closeButton} onClick={handleClose}>
          <i className="fas fa-2x fa-times-circle"></i>
        </span>
      </div>
      <div className="nct-list" style={styles.contactList}>
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  newConvoTab: {
    backgroundColor: "ffffe",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    position: "absolute",
    right: "20px",
    top: "60px",
    zIndex: "3",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  headerText: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  closeButton: {
    cursor: "pointer",
    color: "#888",
  },
  contactList: {
    maxHeight: "300px",
    overflowY: "auto",
  },
};

export default NewConversationTab;
