const sourceUrl = "https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/Calendar";

export const createEvent = (eventData) => {
  return fetch(sourceUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
};

export const fetchEventsList = () => {
  return fetch(sourceUrl).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
    return response.json();
  });
};

export const deleteEvent = (id) => {
  return fetch(`${sourceUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
};
