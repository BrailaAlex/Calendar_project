import React from "react";
import { getRangeOfnumbers } from "../ranges/rangeOfNumbers";

const DayString = ({ showPopUp, children, id }) => {
  return (
    <div id={id} className="week__day-block">
      {children}
      {getRangeOfnumbers(1, 24).map((hour) => {
        const start = hour - 1 < 10 ? `0${hour - 1}` : hour - 1;
        const end = hour < 10 ? `0${hour}` : hour;
        const date = id;
        return (
          <div
            id={hour}
            key={hour}
            onClick={() => showPopUp(start, end, date)}
            className="week__day-block__hour"
          ></div>
        );
      })}
    </div>
  );
  debugger;
};

export default DayString;
