import React from "react";

const SingleContact = ({ name, image, lastMessage }) => {
  return (
    <div class="single-contact row" id="1" onclick="open_chat(this)">
      <div class="col-md-3 col-4">
        <img src={image} class="contact-img" alt="" />
      </div>
      <div class="col-md-9 col-8 contact-message-box">
        <p class="contact-name">{name}</p>
        <p class="contact-last-message">{lastMessage}</p>
      </div>
    </div>
  );
};

export default SingleContact;
