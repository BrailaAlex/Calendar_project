import React from "react";
import DayString from "./DayString";
import Event from "../event/Event";

class WeekBoard extends React.Component {
  render() {
    const { getDates, events, showPopUp } = this.props;
    return (
      <div className="week">
        {getDates().map((day) => {
          const key = moment().isoWeekday(day).format("YYYY-MM-DD");
          return (
            <DayString key={day} showPopUp={showPopUp}>
              {events.map((event) => {
                if (event["event-date"] === key) {
                  return (
                    <Event
                      key={event.id}
                      startTime={event["event-start"]}
                      endTime={event["event-end"]}
                      eventName={event["event-name"]}
                    />
                  );
                }
              })}
            </DayString>
          );
        })}
      </div>
    );
  }
}

export default WeekBoard;
