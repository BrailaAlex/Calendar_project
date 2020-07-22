/* eslint-disable import/no-unresolved */
import React from "react";
import TimePicker from "./TimePicker";
import CloseButton from "./CloseButton";
import SaveButton from "./SaveButton";
import ValidateMessage from "./ValidateMessage";
import DatePicker from "./DatePicker";
import "./popup.scss";

class PopUp extends React.Component {
  state = {
    "event-name": "",
    "event-start-date": this.props.startDate,
    "event-start": this.props.eventStart,
    "event-end": this.props.eventEnd,
    "event-description": "",
    "event-end-date": this.props.endDate,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    this.props.handleSubmit(event);
  };

  render() {
    const { hidePopup } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="event-form">
        <CloseButton hidePopup={hidePopup} />
        <input
          onChange={this.handleChange}
          value={this.state["event-name"]}
          className="event-form__comment"
          type="text"
          name="event-name"
          placeholder="Comment to event"
        />
        <div className="event-form__date-set">
          <DatePicker
            name="event-start-date"
            onChange={this.handleChange}
            value={this.state["event-start-date"]}
            id="start-date"
          />
          <TimePicker
            handleChange={this.handleChange}
            value={this.state["event-start"]}
            name="event-start"
          />
          <TimePicker
            handleChange={this.handleChange}
            value={this.state["event-end"]}
            name="event-end"
          />
          <DatePicker
            name="event-end-date"
            onChange={this.handleChange}
            value={this.state["event-end-date"]}
            id="end-date"
          />
        </div>
        <div className="event-form__event-description">
          <textarea
            value={this.state["event-description"]}
            onChange={this.handleChange}
            className="event-form__event-description__input"
            name="event-description"
            cols="40"
            rows="4"
            placeholder="Description"
          />
        </div>
        <SaveButton />
      </form>
    );
  }
}

export default PopUp;
