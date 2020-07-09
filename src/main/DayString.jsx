import React from "react";
import { getRangeOfnumbers } from "../ranges/rangeOfNumbers";

const DayString = ({ isPopup, showPopUp }) => {
  return (
    <div className="week__day-block">
      <div className="week__day-block__day-string">
        {getRangeOfnumbers(1, 24).map((hour) => (
          <div
            key={hour}
            onClick={showPopUp}
            className="week__day-block__day-string__hour"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DayString;
