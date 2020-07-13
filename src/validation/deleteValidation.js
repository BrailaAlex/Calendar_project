import moment from "moment";

export const deleteValidation = (startTime, date, endTime) => {
  const currentTime = moment().format("YYYY-MM-DD hh:mm");
  const beforeDiff = moment(`${date} ${startTime}`).diff(
    currentTime,
    "minutes"
  );
  const afterDiff = moment(currentTime).diff(`${date} ${endTime}`, "minutes");

  if (beforeDiff < 15 && afterDiff < 0) {
    alert(
      "You can't scip the event, when it less than 15 min before it'll start and before it'll end"
    );
    return true;
  } else {
    return false;
  }
};
