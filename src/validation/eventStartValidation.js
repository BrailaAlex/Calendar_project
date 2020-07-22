/* eslint-disable no-alert */
export const eventStartValidation = (
  starttime,
  startDate,
  endTime,
  endDate
) => {
  const eventStart = new Date(`${startDate} ${starttime}`).getTime();
  const eventEnd = new Date(`${endDate} ${endTime}`).getTime();
  if (eventEnd <= eventStart) {
    alert(
      "end date and time couldn't be less or equal to starting date and time"
    );
    return true;
  }
  return false;
};
