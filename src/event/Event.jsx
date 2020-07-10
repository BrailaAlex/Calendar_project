import React from "react";
import moment from "moment";
import "./event.scss";

const Event = ({ startTime, endTime, eventName }) => {
  let start =
    (startTime[0] === 0 ? startTime.slice(1, 2) : startTime.slice(0, 2)) * 60 +
    +startTime.slice(3, 5);
  let end =
    (endTime[0] === 0 ? endTime.slice(1, 2) : endTime.slice(0, 2)) * 60 +
    +endTime.slice(3, 5);
  let duration = end - start;
  const style = {
    top: `${start}px`,
    height: `${duration}px`,
  };
  return (
    <div style={style} className="event">
      <span className="event__contain">{eventName}</span>
      <span className="event__time">{`${startTime} - ${endTime}`}</span>
    </div>
  );
};

export default Event;
