import React from "react";
import WeekBoard from "./WeekBoard";
import TimeSign from "./TimeSign";
import "./index.scss";

const MainBoard = () => {
  return (
    <div className="main-board">
      <TimeSign />
      <WeekBoard />
    </div>
  );
};

export default MainBoard;
