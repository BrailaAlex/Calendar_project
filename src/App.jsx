import React from "react";
import HeaderMain from "./header/HeaderMain";
import MainBoard from "./main/MainBoard";
import PopUp from "./popup/PopUp";
import moment from "moment";
import { createEvent, fetchEventsList } from "../src/serverPart/gateWays";

class App extends React.Component {
  state = {
    isPopup: false,
    firstMondayNumber: 1,
    events: [],
    eventEnd: "",
    eventStart: "",
    date: "",
  };

  componentDidMount() {
    this.getEventsList();
  }

  getDates = () => {
    const weekString = [];

    for (let i = 0; i <= 6; i++) {
      let arg = this.state.firstMondayNumber + i;
      weekString.push(arg);
    }
    return weekString;
  };

  getEventsList = () => {
    fetchEventsList().then((eventsList) => {
      this.setState({
        events: eventsList,
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = Object.fromEntries(new FormData(e.target));
    createEvent(newEvent).then(() => this.getEventsList());
    this.hidePopUp();
  };

  showPopUp = (e) => {
    let start;
    let end;
    let date;
    if (event.target.classList.contains("week__day-block__hour")) {
      start =
        event.target.previousSibling.id < 10
          ? `0${event.target.previousSibling.id}`
          : event.target.previousSibling.id;
      end = event.target.id < 10 ? `0${event.target.id}` : event.target.id;
      date = event.target.closest(".week__day-block").id;
    } else {
      start = new Date().getHours();
      end = new Date().getHours() + 1;
      date = moment().format("YYYY-MM-DD");
    }
    this.setState({
      date: date,
      eventStart: `${start}:00`,
      eventEnd: `${end}:00`,
      isPopup: true,
    });
  };

  hidePopUp = (e) => {
    this.setState({
      isPopup: false,
    });
  };

  toggleCurrentWeek = () => {
    this.setState({
      firstMondayNumber: 1,
    });
  };

  toggleNextWeek = () => {
    this.setState({
      firstMondayNumber: this.state.firstMondayNumber + 7,
    });
  };

  togglePrevWeek = () => {
    this.setState({
      firstMondayNumber: this.state.firstMondayNumber - 7,
    });
  };

  render() {
    const style = this.state.isPopup
      ? {
          opacity: 0.4,
        }
      : null;
    return (
      <>
        <div style={style} className="calendar">
          <HeaderMain
            getDates={this.getDates}
            currentWeek={this.toggleCurrentWeek}
            nextWeek={this.toggleNextWeek}
            prevWeek={this.togglePrevWeek}
            currentMonday={this.state.firstMondayNumber}
            showPopUp={this.showPopUp}
            isPopup={this.state.isPopup}
          />
          <MainBoard
            events={this.state.events}
            getDates={this.getDates}
            showPopUp={this.showPopUp}
            isPopup={this.state.isPopup}
          />
        </div>
        {this.state.isPopup && (
          <PopUp
            date={this.state.date}
            eventStart={this.state.eventStart}
            eventEnd={this.state.eventEnd}
            events={this.state.events}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            isPopup={this.state.isPopup}
            hidePopup={this.hidePopUp}
          />
        )}
      </>
    );
  }
}

export default App;
