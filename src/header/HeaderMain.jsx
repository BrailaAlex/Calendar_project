import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import DayOfWeek from "./DayOfWeek";
import "./header.scss";
import moment from "moment";

const HeaderMain = ({ currentMonday, getDates, ...props }) => {
  return (
    <header className="header">
      <HeaderNavigation getMonth={getDates} {...props} />
      <div className="header-main">
        <div className="header-main__gmt-zone">
          <span className="header-main__gmt-zone__text">
            {"GMT+ " + moment().utcOffset() / 60}
          </span>
        </div>
        <div className="header-main__gmt-separateline"></div>
        <ul className="header-main__weekstring">
          {getDates().map((day) => (
            <DayOfWeek key={day}>{day}</DayOfWeek>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeaderMain;
