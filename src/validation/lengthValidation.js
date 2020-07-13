export const lengthValidation = (startTime, endTime) => {
  const start = startTime.split(":");
  const end = endTime.split(":");
  const difference = (end[0] * 60 + +end[1] - start[0] * 60 - +start[1]) / 60;
  if (difference > 6) {
    alert("It can`t take more, than 6 hours");
    return true;
  } else {
    return false;
  }
};
