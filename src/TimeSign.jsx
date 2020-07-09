import React from "react";
import moment from "moment";

const TimeSign = () => {
  return (
    <>
      <div className="time-string__hours">
        {Array(23)
          .fill(null)
          .map((hour, index) => (
            <div className="time-string__hours__hour">
              <span className="time-string__hours__hour-text">
                {index < 9 ? `0${index + 1}:00` : `${index + 1}:00`}
              </span>
            </div>
          ))}
      </div>
      <div className="separateline-string">
        {Array(24)
          .fill(null)
          .map((digit) => (
            <div className="separateline-string__line"></div>
          ))}
      </div>
    </>
  );
};

export default TimeSign;
