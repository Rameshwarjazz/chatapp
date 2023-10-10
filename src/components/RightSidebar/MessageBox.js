import React, { useEffect, useState } from "react";

import LeftChatBubble from "./LeftChatBubble";
import { useDispatch } from "react-redux";
import RightChatBubble from "./RightChatBubble";
import MessageInput from "./MessageInput";
import { addNewMessage } from "../../actions/contact";
import ProfileHeader from "../LeftSidebar/ProfileHeader";
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();
  useEffect(() => {


    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);
  var time;
  var hours;
  var minutes;
  function currentTime() {
  var currentDate = new Date();
  hours = currentDate.getHours();
  hours = hours % 12 || 12;
  hours = appendZero(hours);

  // hours = appendZero(currentDate.getHours());
  minutes = appendZero(currentDate.getMinutes());
  var seconds = appendZero(currentDate.getSeconds());
  const am = "AM";
  const pm = "PM";
   const timeZone = hours <= 12 ? am : pm;

  time = `${hours}:${minutes}:${seconds} ${timeZone}`;

  }

  function appendZero(time) {
  if (time < 10 && time.length != 2) {
    return "0" + time;
  }
  return time;
}


setInterval(currentTime, 1000);



  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: time,
      sender: "me",
      message_id: length + 1,
    };
    dispatch(addNewMessage(object, props.user.id));
    // updatelength
    setLength(object.message_id);

    setChat([...chat, object]);
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} />
        </div>
        {chat.length === 0 && (
          <p className="no-message-alert">NO MESSAGES FOUND</p>
        )}
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"Rameshwar Jaiswal"}
                  image={"data:image/jpeg;base64,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"}
                    
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        )}

        <MessageInput newMessageHandler={updateMesssages} user={props.user} />
      </div>
    </>
  );
}

export default MessageBox;