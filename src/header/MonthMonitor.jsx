import React from "react";
import moment from "moment";

const MonthMonitor = (props) => {
  const monthString = props.getMonth();
  const startOfWeek = moment().isoWeekday(monthString[0]);
  const endOfWeek = moment().isoWeekday(monthString[6]);
  const sameMonth = startOfWeek.format("MMMM YYYY");
  const difMonths = `${startOfWeek.format("MMM")} - ${endOfWeek.format(
    "MMM YYYY"
  )}`;
  const difYears = `${startOfWeek.format("MMM YYYY")} - ${endOfWeek.format(
    "MMM YYYY"
  )}`;
  const currentMonth =
    startOfWeek.format("MM") === endOfWeek.format("MM")
      ? sameMonth
      : startOfWeek.format("YYYY") === endOfWeek.format("YYYY")
      ? difMonths
      : difYears;
  return (
    <span className="header-navigation__month-shower">{currentMonth}</span>
  );
};

export default MonthMonitor;
