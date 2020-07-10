import React from "react";
import { timeDivide } from "./popUpFunctionality";

const TimePicker = ({ name, value, handleChange }) => {
  return (
    <select
      onChange={handleChange}
      value={value}
      className="event-form__date-set__time-picker"
      name={name}
    >
      {timeDivide().map((arg) => (
        <option key={arg}>{arg}</option>
      ))}
    </select>
  );
};

export default TimePicker;
