import React from "react";
import { getRangeOfnumbers } from "../ranges/rangeOfNumbers";
import moment from "moment";

const TimeSign = () => {
  return (
    <>
      <div className="time-string__hours">
        {getRangeOfnumbers(1, 23).map((hour) => (
          <div key={hour} className="time-string__hours__hour">
            <span className="time-string__hours__hour-text">
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </span>
          </div>
        ))}
      </div>
      <div className="separateline-string">
        {getRangeOfnumbers(1, 24).map((digit) => (
          <div key={digit} className="separateline-string__line"></div>
        ))}
      </div>
    </>
  );
};

export default TimeSign;
