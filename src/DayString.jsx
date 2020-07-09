import React from "react";

const DayString = () => {
  return (
    <div className="week__day-block">
      <div className="week__day-block__day-string">
        {Array(24)
          .fill(null)
          .map((hour) => (
            <div className="week__day-block__day-string__hour"></div>
          ))}
      </div>
    </div>
  );
};

export default DayString;
