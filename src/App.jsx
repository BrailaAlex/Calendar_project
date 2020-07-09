import React from "react";
import HeaderMain from "./header/HeaderMain";
import MainBoard from "./MainBoard";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="calendar">
        <HeaderMain />
        <MainBoard />
      </div>
    );
  }
}

export default App;
