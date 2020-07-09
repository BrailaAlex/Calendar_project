import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const NavigationButtons = (props) => {
  return (
    <>
      <button className="header-navigation__switcher-btn prev-week-btn">
        {"<"}
      </button>
      <button className="header-navigation__switcher-btn next-week-btn">
        {">"}
      </button>
    </>
  );
};

export default NavigationButtons;
