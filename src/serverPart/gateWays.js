const sourceUrl =
  "https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/CalendarEvents";

export const createEvent = (eventData) => {
  return fetch(sourceUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create event");
    }
  });
};

export const fetchEventsList = () => {
  return fetch(sourceUrl).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return response.json();
  });
};

export const deleteEvent = (id) => {
  return fetch(`${sourceUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete event");
    }
  });
};
