import React from "react";
import DayString from "./DayString";

const WeekBoard = () => {
  return (
    <div className="week">
      {Array(7)
        .fill(null)
        .map((day) => (
          <DayString />
        ))}
    </div>
  );
};

export default WeekBoard;
