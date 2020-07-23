import { getRangeOfnumbers } from "../ranges/rangeOfNumbers";

export const timeDivide = () => {
  let minutes = 0;
  let timeArray = [];
  getRangeOfnumbers(0, 23).map((num) => {
    for (let j = 0; j < 4; j++) {
      let timeHours = num < 10 ? `0${num}` : num;
      let timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
      let time = `${timeHours}:${timeMinutes}`;
      timeArray.push(time);
      minutes += 15;
      if (minutes === 60) minutes = 0;
    }
  });
  timeArray.push("24:00");
  return timeArray;
};
