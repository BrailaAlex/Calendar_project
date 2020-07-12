export const lengthValidation = (startTime, endTime) => {
  const start = startTime.split(":");
  const end = endTime.split(":");
  const difference = (end[0] * 60 + +end[1] - start[0] * 60 - +start[1]) / 60;
  return difference > 6;
};
