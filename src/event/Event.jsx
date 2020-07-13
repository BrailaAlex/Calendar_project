import React from "react";
import "./event.scss";
import DeleteBtn from "./DeleteBtn";
import { deleteValidation } from "../validation/deleteValidation";

class Event extends React.Component {
  state = {
    isDelete: false,
  };

  showDelete = () => {
    this.setState({
      isDelete: true,
    });
  };

  hideDelete = () => {
    debugger;
    this.setState({
      isDelete: false,
    });
  };

  deleteEvent = (id) => {
    if (
      deleteValidation(
        this.props.startTime,
        this.props.date,
        this.props.endTime
      )
    ) {
      debugger;
      this.hideDelete();
    } else {
      this.props.deleteEvent(id);
    }
  };
  render() {
    console.log(this.state.isDelete);
    const { startTime, endTime, eventName, id } = this.props;
    let start =
      (startTime[0] === 0 ? startTime.slice(1, 2) : startTime.slice(0, 2)) *
        60 +
      +startTime.slice(3, 5);
    let end =
      (endTime[0] === 0 ? endTime.slice(1, 2) : endTime.slice(0, 2)) * 60 +
      +endTime.slice(3, 5);
    let duration = end - start;
    const style = {
      top: `${start}px`,
      height: `${duration}px`,
    };
    return (
      <div onClick={this.showDelete} style={style} className="event">
        <span className="event__contain">{eventName}</span>
        <span className="event__time">{`${startTime} - ${endTime}`}</span>
        {this.state.isDelete && (
          <DeleteBtn deleteTask={this.deleteEvent} id={id} />
        )}
      </div>
    );
  }
}

export default Event;
