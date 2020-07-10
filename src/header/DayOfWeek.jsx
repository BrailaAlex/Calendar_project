import React from "react";
import moment from "moment";

const DayOfWeek = ({ children }) => {
  const style =
    moment().isoWeekday(children).format("DD MM YY") ===
    moment().format("DD MM YY")
      ? {
          backgroundColor: "#4160ec",
          color: "#fff",
        }
      : null;
  return (
    <li className="header-main__weekstring__day">
      <span className="header-main__weekstring__day-name">
        {moment().isoWeekday(children).format("ddd")}
      </span>
      <span style={style} className="header-main__weekstring__day-date">
        {moment().isoWeekday(children).format("DD")}
      </span>
      <div className="header-main__weekstring__holiday">
        <span className="header-main__weekstring__holiday-text"></span>
      </div>
    </li>
  );
};

export default DayOfWeek;
