import React from "react";

const DatePicker = ({ onChange, value, id, name }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className="event-form__date-set__date"
      type="date"
      id={id}
      name={name}
    />
  );
};

export default DatePicker;
