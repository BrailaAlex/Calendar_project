import moment from "moment";

export const crossValidation = (
  newEventDate,
  newEventEnd,
  newEventStart,
  existingEvents
) => {
  let crossingEvents = [];
  const newEventStartMoment = `${newEventDate} ${newEventStart}`;
  const newEventEndMoment = `${newEventDate} ${newEventEnd}`;
  if (
    existingEvents.every((event) => event["event-start-date"] !== newEventDate)
  ) {
    return false;
  }
  const sameDayEvents = existingEvents.filter(
    (event) => event["event-start-date"] === newEventDate
  );
  sameDayEvents.map((event) => {
    const eventStartMoment = `${event["event-start-date"]} ${event["event-start"]}`;
    const eventEndMoment = `${event["event-start-date"]} ${event["event-end"]}`;
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
  console.log(crossingEvents.length);
  if (crossingEvents.length > 0) {
    alert("It seems you have another plans for that time");
    return true;
  } else {
    return false;
  }
};
