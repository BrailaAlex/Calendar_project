import React from "react";
import DayString from "./DayString";
import Event from "../event/Event";
import RedLine from "../redLine/RedLine";
import moment from "moment";

class WeekBoard extends React.Component {
  render() {
    const {
      getDates,
      events,
      showPopUp,
      showDelete,
      deleteEvent,
      isDelete,
    } = this.props;
    return (
      <div className="week">
        {getDates().map((day) => {
          const currentDay = moment().format("YYYY-MM-DD");
          const key = moment().isoWeekday(day).format("YYYY-MM-DD");
          return (
            <DayString id={key} key={day} showPopUp={showPopUp}>
              {currentDay === key && <RedLine />}
              {events.map((event) => {
                if (event["event-date"] === key) {
                  return (
                    <Event
                      isDelete={isDelete}
                      showDelete={showDelete}
                      deleteEvent={deleteEvent}
                      id={event.id}
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
