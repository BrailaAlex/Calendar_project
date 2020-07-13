import React from "react";
import HeaderMain from "./header/HeaderMain";
import MainBoard from "./main/MainBoard";
import PopUp from "./popup/PopUp";
import { crossValidation } from "./validation/crossValidation";
import { lengthValidation } from "./validation/lengthValidation";
import { oneDayValidation } from "./validation/oneDayValidation";

import {
  createEvent,
  fetchEventsList,
  deleteEvent,
} from "../src/serverPart/gateWays";

class App extends React.Component {
  state = {
    isPopup: false,
    firstMondayNumber: 1,
    events: [],
    eventEnd: "",
    eventStart: "",
    startDate: "",
    endDate: "",
  };

  componentDidMount() {
    this.getEventsList();
  }

  onDeleteEvent = (id) => {
    return deleteEvent(id).then(() => this.getEventsList());
  };

  getDates = () => {
    const weekString = [];

    for (let i = 0; i <= 6; i++) {
      let arg = this.state.firstMondayNumber + i;
      weekString.push(arg);
    }
    return weekString;
  };

  getEventsList = () => {
    fetchEventsList()
      .then((eventsList) => {
        this.setState({
          events: eventsList,
        });
      })
      .catch((error) => alert(error));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = Object.fromEntries(new FormData(e.target));
    if (
      oneDayValidation(
        newEvent["event-start"],
        newEvent["event-end"],
        newEvent["event-start-date"],
        newEvent["event-end-date"]
      )
    ) {
      return;
    }
    if (lengthValidation(newEvent["event-start"], newEvent["event-end"])) {
      return;
    }
    if (
      crossValidation(
        newEvent["event-start-date"],
        newEvent["event-end"],
        newEvent["event-start"],
        this.state.events
      )
    ) {
      return;
    }
    {
      createEvent(newEvent).then(() => this.getEventsList());
      this.hidePopUp();
    }
  };

  showPopUp = (start, end, startDate, endDate) => {
    this.setState({
      startDate,
      endDate,
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
            isDelete={this.state.isDelete}
            showDelete={this.onDeleteShow}
            deleteEvent={this.onDeleteEvent}
            events={this.state.events}
            getDates={this.getDates}
            showPopUp={this.showPopUp}
            isPopup={this.state.isPopup}
          />
        </div>
        {this.state.isPopup && (
          <PopUp
            startDate={this.state.startDate}
            endDate={this.state.endDate}
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
