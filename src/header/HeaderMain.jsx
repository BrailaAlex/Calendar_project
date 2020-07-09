import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import DayOfWeek from "./DayOfWeek";
import "./header.scss";
import moment from "moment";

const weekString = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const HeaderMain = () => {
  return (
    <header className="header">
      <HeaderNavigation />
      <div className="header-main">
        <div class="header-main__gmt-zone">
          <span class="header-main__gmt-zone__text">
            {"GMT+ " + moment().utcOffset() / 60}
          </span>
        </div>
        <div class="header-main__gmt-separateline"></div>
        <ul className="header-main__weekstring">
          {weekString.map((day) => (
            <DayOfWeek>{day}</DayOfWeek>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeaderMain;
