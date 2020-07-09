import React from "react";
import { timeDivide } from "./popUpFunctionality";

const TimePicker = () => {
  return (
    <select className="event-form__date-set__time-picker" name="event-start">
      {timeDivide().map((arg) => (
        <option key={arg}>{arg}</option>
      ))}
    </select>
  );
};

export default TimePicker;
