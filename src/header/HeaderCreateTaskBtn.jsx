import React from "react";
import moment from "moment";

const HeaderCreateTaskBtn = ({ showPopUp }) => {
  const start = new Date().getHours();
  const end = new Date().getHours() + 1;
  const date = moment().format("YYYY-MM-DD");
  return (
    <button
      onClick={() => showPopUp(start, end, date, date)}
      className="header-navigation__createtask-btn"
    >
      <svg
        className="header-navigation__createtask-btn__cross"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path className="add-event" fill="#34A853" d="M16 16v14h4V20z"></path>
        <path
          className="add-event"
          fill="#4285F4"
          d="M30 16H20l-4 4h14z"
        ></path>
        <path className="add-event" fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path className="add-event" fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path className="add-event" fill="none" d="M0 0h36v36H0z"></path>
      </svg>
      <span className="header-navigation__createtask-btn__text">Create</span>
    </button>
  );
};

export default HeaderCreateTaskBtn;
