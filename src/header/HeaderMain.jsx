import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import DayOfWeek from "./DayOfWeek";
import "./header.scss";
import moment from "moment";

class HeaderMain extends React.Component {
  getDates = () => {
    const weekString = [];

    for (let i = 0; i <= 6; i++) {
      let arg = this.props.currentMonday + i;
      weekString.push(arg);
    }
    return weekString;
  };

  render() {
    const { currentMonday, ...props } = this.props;
    return (
      <header className="header">
        <HeaderNavigation getMonth={this.getDates} {...this.props} />
        <div className="header-main">
          <div className="header-main__gmt-zone">
            <span className="header-main__gmt-zone__text">
              {"GMT+ " + moment().utcOffset() / 60}
            </span>
          </div>
          <div className="header-main__gmt-separateline"></div>
          <ul className="header-main__weekstring">
            {this.getDates().map((day) => (
              <DayOfWeek key={day}>{day}</DayOfWeek>
            ))}
          </ul>
        </div>
      </header>
    );
  }
}

export default HeaderMain;
