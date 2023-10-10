import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo" onClick={handleClick}>
      <label>New Conversation</label>
    </div>
  );
}

export default NewConversation;