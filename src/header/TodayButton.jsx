import React from "react";

const TodayButton = ({ currentWeek }) => {
  return (
    <button onClick={currentWeek} className="header-navigation__today-btn">
      <span className="header-navigation__today-btn__text">Today</span>
    </button>
  );
};

export default TodayButton;
