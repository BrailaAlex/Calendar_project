import React from "react";
import HeaderMain from "./header/HeaderMain";
import MainBoard from "./main/MainBoard";
import PopUp from "./popup/PopUp";
import moment from "moment";

class App extends React.Component {
  state = {
    isPopup: false,
    firstMondayNumber: 1,
  };

  showPopUp = () => {
    this.setState({
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
    return (
      <div className="calendar">
        <HeaderMain
          currentWeek={this.toggleCurrentWeek}
          nextWeek={this.toggleNextWeek}
          prevWeek={this.togglePrevWeek}
          currentMonday={this.state.firstMondayNumber}
          showPopUp={this.showPopUp}
          isPopup={this.state.isPopup}
        />
        <MainBoard showPopUp={this.showPopUp} isPopup={this.state.isPopup} />
        {this.state.isPopup && (
          <PopUp isPopup={this.state.isPopup} hidePopup={this.hidePopUp} />
        )}
      </div>
    );
  }
}

export default App;
