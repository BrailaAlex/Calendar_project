import React from "react";
import moment from "moment";

const MonthMonitor = (props) => {
  const monthString = props.getMonth();
  console.log(monthString[0]);
  const currentMonth =
    moment().isoWeekday(monthString[0]).format("MM") ===
    moment().isoWeekday(monthString[6]).format("MM")
      ? moment().isoWeekday(monthString[0]).format("MMMM YYYY")
      : `${moment()
          .isoWeekday(monthString[0])
          .format("MMM")} - ${moment()
          .isoWeekday(monthString[6])
          .format("MMM")} ${moment()
          .isoWeekday(monthString[6])
          .format("YYYY")}`;
  console.log(currentMonth);
  return (
    <span className="header-navigation__month-shower">{currentMonth}</span>
  );
};

export default MonthMonitor;
