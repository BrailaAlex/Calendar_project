import React from "react";
import DayString from "./DayString";
import Event from "../event/Event";

const WeekBoard = ({ getDates, events, showPopUp }) => {
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
                    description={event["event-description"]}
                  />
                );
              }
            })}
          </DayString>
        );
      })}
    </div>
  );
};

export default WeekBoard;
