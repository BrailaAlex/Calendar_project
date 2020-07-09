import React from "react";

const HeaderCreateTaskBtn = (props) => {
  return (
    <button className="header-navigation__createtask-btn">
      <svg
        class="header-navigation__createtask-btn__cross"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path class="add-event" fill="#34A853" d="M16 16v14h4V20z"></path>
        <path class="add-event" fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path class="add-event" fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path class="add-event" fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path class="add-event" fill="none" d="M0 0h36v36H0z"></path>
      </svg>
      <span className="header-navigation__createtask-btn__text">Create</span>
    </button>
  );
};

export default HeaderCreateTaskBtn;
