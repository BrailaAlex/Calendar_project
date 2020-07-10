import React from "react";
import { getRangeOfnumbers } from "../ranges/rangeOfNumbers";

const DayString = ({ showPopUp, children }) => {
  return (
    <div className="week__day-block">
      {children}
      {getRangeOfnumbers(1, 24).map((hour) => (
        <div
          key={hour}
          onClick={showPopUp}
          className="week__day-block__hour"
        ></div>
      ))}
    </div>
  );
  debugger;
};

export default DayString;
