import moment from "moment";

export const oneDayValidation = (startTime, endTime, startDate, endDate) => {
  const start = `${startDate} ${startTime}`;
  const end = `${endDate} ${endTime}`;
  const midNight = `${endDate} 00:00`;
  const isMidnight = moment(midNight).isBetween(start, end);
  if (isMidnight) {
    alert("Try to finish it in one day");
    return true;
  } else {
    return false;
  }
};
