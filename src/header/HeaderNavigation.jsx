import React from "react";
import HeaderCreateTaskBtn from "./HeaderCreateTaskBtn";
import MonthMonitor from "./MonthMonitor";
import NavigationButtons from "./NavigationButtons";
import TodayButton from "./TodayButton";

const HeaderNavigation = (props) => {
  return (
    <div className="header-navigation">
      <HeaderCreateTaskBtn {...props} />
      <TodayButton {...props} />
      <NavigationButtons {...props} />
      <MonthMonitor {...props} />
    </div>
  );
};

export default HeaderNavigation;
