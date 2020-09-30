import React from "react";

const ChatBox = () => {
  return (
    <div class="col-md-12 col-sm-12 col-lg-8 col-12 chat-box" id="chat-box">
      <div class="contact-chat row">
        <div class="chat-header container-fluid">
          <div class="row p-1">
            <div class="col-3 col-md-4 p-0 text-center ">
              <a
                class="back-icon"
                id="back-icon"
                href="javascript:go_to_chats()"
              >
                <i class="fa fa-angle-left d-lg-none font-30 "></i>
              </a>

              <img src="img/1.jpg" class="contact-img" alt="" />
            </div>
            <div class="col-md-8 col-9 d-table p-0 m-auto ">
              <div class="d-table-cell font-20">&nbsp;Mike Rose</div>
              <div class=" d-table-cell text-right">
                <div class="dropdown">
                  <button class="dropbtn">
                    <span class="fa fa-ellipsis-h"></span>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Profile</a>
                    <a href="#">Report</a>
                    <a href="#">Block</a>
                    <a href="#">Delete Chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-12 col-12 col-lg-12 col12 message-box"
          id="message-box"
        >
          <div class="message sent col-md-9 col-11">
            <p class="col-md-12 col-12">
              Sed ac cursus tortor, id dictum velit. Nullam laoreet eros eu
              lectus mollis tempor. Sed at luctus nunc, at ullamcorper diam.
            </p>
            <span>2:30pm</span>
          </div>
          <div class="message received col-md-9 col-11">
            <p class="col-md-12 col-12">
              Nullam laoreet eros eu lectus mollis tempor. Sed ac cursus tortor,
              id dictum velit. Nullam laoreet eros eu lectus mollis tempor. Sed
              at luctus nunc, at ullamcorper diam.
            </p>
            <span>2:38pm</span>
          </div>
        </div>
        <div class="chat-footer">
          <form class="p-1 w-100" id="message-form" onsubmit="return false;">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Compose ..."
                id="message"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-primary"
                  type="button"
                  onclick="send_message()"
                >
                  <span class="fa fa-paper-plane"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="scroll-to-bottom" id="scroll-btn">
          <button type="button" class="btn" onclick="scroll_to_bottom()">
            <i class="fa fa-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
