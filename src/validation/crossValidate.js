import moment from "moment";

export const crossValidate = (
  newEventDate,
  newEventEnd,
  newEventStart,
  existingEvents
) => {
  let crossingEvents = [];
  const newEventStartMoment = `${newEventDate} ${newEventStart}`;
  const newEventEndMoment = `${newEventDate} ${newEventEnd}`;
  if (existingEvents.every((event) => event["event-date"] !== newEventDate)) {
    return false;
  }
  const sameDayEvents = existingEvents.filter(
    (event) => event["event-date"] === newEventDate
  );

  sameDayEvents.map((event) => {
    const eventStartMoment = `${event["event-date"]} ${event["event-start"]}`;
    const eventEndMoment = `${event["event-date"]} ${event["event-end"]}`;
    if (
      moment(eventStartMoment).isBetween(
        newEventStartMoment,
        newEventEndMoment
      ) ||
      moment(eventEndMoment).isBetween(
        newEventStartMoment,
        newEventEndMoment
      ) ||
      moment(newEventStartMoment).isBetween(eventStartMoment, eventEndMoment) ||
      moment(newEventEndMoment).isBetween(eventStartMoment, eventEndMoment) ||
      (newEventStartMoment === eventStartMoment &&
        newEventEndMoment === eventEndMoment)
    ) {
      crossingEvents = [...crossingEvents, 1];
    }
  });
  if (crossingEvents.length > 0) {
    return true;
  } else {
    return false;
  }
};
