import React from "react";

const NavigationButtons = (props) => {
  return (
    <>
      <button
        onClick={props.prevWeek}
        className="header-navigation__switcher-btn prev-week-btn"
      >
        {"<"}
      </button>
      <button
        onClick={props.nextWeek}
        className="header-navigation__switcher-btn next-week-btn"
      >
        {">"}
      </button>
    </>
  );
};

export default NavigationButtons;
