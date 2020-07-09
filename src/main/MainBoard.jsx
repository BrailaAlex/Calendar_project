import React from "react";
import WeekBoard from "./WeekBoard";
import TimeSign from "./TimeSign";
import "./main.scss";

const MainBoard = (props) => {
  return (
    <div className="main-board">
      <TimeSign />
      <WeekBoard {...props} />
    </div>
  );
};

export default MainBoard;
