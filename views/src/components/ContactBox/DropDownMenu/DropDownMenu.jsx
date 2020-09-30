import React from "react";

const DropDownMenu = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn">
        <span class="fa fa-ellipsis-h"></span>
      </button>
      <div class="dropdown-content">
        <a href="#">Edit</a>
        <a href="#">Contact Us</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default DropDownMenu;
