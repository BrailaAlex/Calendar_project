import React from "react";
import TimePicker from "./TimePicker";
import CloseButton from "./CloseButton";
import SaveButton from "./SaveButton";
import "./popup.scss";

class PopUp extends React.Component {
  state = {
    "event-name": "",
    "event-date": this.props.date,
    "event-start": this.props.eventStart,
    "event-end": this.props.eventEnd,
    "event-description": "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    this.props.handleSubmit(event);
    for (let name in this.state) {
      this.setState({
        [name]: "",
      });
    }
  };

  render() {
    const { hidePopup, events } = this.props;
    return (
      <form events={events} onSubmit={this.onSubmit} className="event-form">
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
          <input
            onChange={this.handleChange}
            value={this.state["event-date"]}
            className="event-form__date-set__date"
            type="date"
            id="start"
            name="event-date"
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
