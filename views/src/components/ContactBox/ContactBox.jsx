import React from "react";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import SingleContact from "./SingleContact/SingleContact";

const ContactBox = () => {
  const testSubject = [
    {
      name: "Nick William",
      image: "img/profile_user.jpg",
      lastMessage: "Sample Text",
    },
    {
      name: "Mike Rose",
      image: "img/1.jpg",
      lastMessage: "Sample Text",
    },
  ];
  return (
    <div
      class="col-md-12 col-sm-12 col-lg-4 col-12 d-none d-lg-block contacts-box"
      id="contacts-box"
    >
      <div class="col-lg-12 col-sm-12 col-md-12 col-12 user-box">
        <div class="row conversation-header">
          <div class="col-md-8 col-9 ">
            <p class="font-20">Messages</p>
          </div>
          <div class="col-md-4 col-3 d-table p-0 m-auto">
            <div class=" d-table-cell text-right">
              <DropDownMenu />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-sm-12 col-md-12 col-12 user-chats">
        {testSubject.map((user) => (
          <SingleContact
            name={user.name}
            image={user.image}
            lastMessage={user.lastMessage}
          />
        ))}
      </div>
      <div class="bottom-bar row d-none-856 ">
        <button class="btn col-md-6 col-6">
          <span class="fa fa-cog text-blue"></span> Settings
        </button>
        <button class="btn col-md-6 col-6">
          <span class="fa fa-user-plus text-blue"></span> Add Contact
        </button>
      </div>
      <div class="bottom-bar row d-block-856 ">
        <button class="btn col-md-6 col-6">
          <span class="fa fa-cog text-blue"></span>
        </button>
        <button class="btn col-md-6 col-6">
          <span class="fa fa-user-plus text-blue"></span>
        </button>
      </div>
      <div class="create-new-chat">
        <button class="btn">
          <i class="fa fa-comment"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactBox;
