import React from "react";

const CloseButton = ({ hidePopup }) => {
  return (
    <div className="event-form__close-container">
      <span onClick={hidePopup} className="event-form__close-container__button">
        +
      </span>
    </div>
  );
};

export default CloseButton;
