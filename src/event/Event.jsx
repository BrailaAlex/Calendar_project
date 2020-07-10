import React from "react";
import moment from "moment";
import "./event.scss";

const Event = ({ startTime, endTime, description }) => {
  let start = startTime.slice(1, 2) * 60 + +startTime.slice(3, 5);
  let end = endTime.slice(1, 2) * 60 + +endTime.slice(3, 5);
  let duration = end - start;
  const style = {
    top: `${start}px`,
    height: `${duration}px`,
  };
  debugger;
  return (
    <div style={style} className="event">
      <span className="event__contain">{description}</span>
      <span className="event__time">{`${startTime} - ${endTime}`}</span>
    </div>
  );
};

export default Event;
