import React from "react";

const DayOfWeek = ({ children }) => {
  return (
    <li className="header-main__weekstring__day">
      <span className="header-main__weekstring__day-name">{children}</span>
      <span className="header-main__weekstring__day-date"></span>
      <div className="header-main__weekstring__holiday">
        <span className="header-main__weekstring__holiday-text"></span>
      </div>
    </li>
  );
};

export default DayOfWeek;
