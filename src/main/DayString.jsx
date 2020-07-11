import React from "react";
import { getRangeOfnumbers } from "../ranges/rangeOfNumbers";

const DayString = ({ showPopUp, children, id }) => {
  return (
    <div id={id} className="week__day-block">
      {children}
      {getRangeOfnumbers(1, 24).map((hour) => (
        <div
          id={hour}
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
