import React from "react";
import HeaderCreateTaskBtn from "./HeaderCreateTaskBtn";
import MonthMonitor from "./MonthMonitor";
import NavigationButtons from "./NavigationButtons";
import TodayButton from "./TodayButton";

const HeaderNavigation = () => {
  return (
    <div className="header-navigation">
      <HeaderCreateTaskBtn />
      <MonthMonitor />
      <TodayButton />
      <NavigationButtons />
    </div>
  );
};

export default HeaderNavigation;
