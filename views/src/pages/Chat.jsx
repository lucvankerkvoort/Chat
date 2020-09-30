import React from "react";
import ChatBox from "../components/ChatContact/ChatBox";
import ContactBox from "../components/ContactBox/ContactBox";

const Chat = (props) => {
  return (
    <div class="container">
      <div class="row sms-main-container">
        <div class="container sms-box">
          <div class="row">
            <ContactBox />
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
