import React from "react";
import moment from "moment";
import TimePicker from "./TimePicker";
import SaveButton from "./SaveButton";
import CloseButton from "./CloseButton";

import "./popUp.scss";

class PopUp extends React.Component {
  render() {
    return (
      <form className="event-form">
        <CloseButton {...this.props} />
        <input
          className="event-form__comment"
          type="text"
          name="event-name"
          placeholder="Comment to event"
        />
        <div className="event-form__date-set">
          <input
            className="event-form__date-set__date"
            type="date"
            id="start"
            name="event-date"
          />
          <TimePicker />
          <TimePicker />
        </div>
        <div className="event-form__event-description">
          <textarea
            className="event-form__event-description__input"
            name="description-input"
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
