import moment from "moment";

export const oneDayValidation = (startTime, endTime, startDate, endDate) => {
  const start = `${startDate} ${startTime}`;
  const end = `${endDate} ${endTime}`;
  const midNight = `${endDate} 00:00`;
  const isMidnight = moment(midNight).isBetween(start, end);
  debugger;
  return isMidnight;
};
