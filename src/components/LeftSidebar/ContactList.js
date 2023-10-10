import React from "react";
import ContactTab from "./ContactTab";

function ContactList({ contacts }) {
  return (
    <div style={styles.contactList} className="contactscreen">
      {contacts.map((contact, index) => (
        <ContactTab contact={contact} key={index} />
      ))}
    </div>
  );
}

const styles = {
  contactList: {
    overflowY: "scroll",
    height: "80vh",
    zIndex: "2",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
  },
};

export default ContactList;
