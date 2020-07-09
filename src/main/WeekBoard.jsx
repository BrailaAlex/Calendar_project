import React from "react";
import DayString from "./DayString";
import { getRangeOfnumbers } from "../ranges/rangeOfNumbers";

const WeekBoard = (props) => {
  return (
    <div className="week">
      {getRangeOfnumbers(1, 7).map((day) => (
        <DayString key={day} {...props} />
      ))}
    </div>
  );
};

export default WeekBoard;
