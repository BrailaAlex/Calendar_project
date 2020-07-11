import React from "react";
import "./RedLine.scss";

class RedLine extends React.Component {
  state = {
    currentTime: new Date().getHours() * 60 + new Date().getMinutes(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: new Date().getHours() * 60 + new Date().getMinutes(),
      });
    }, 60000);
  }

  render() {
    const currentTime = this.state.currentTime;
    const style = {
      top: `${currentTime}px`,
    };
    return (
      <div style={style} className="red-line">
        <span className="red-line__dot"></span>
        <span className="red-line__line"></span>
      </div>
    );
  }
}

export default RedLine;
