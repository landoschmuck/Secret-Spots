export function getFromLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getSpots() {
  return fetch("/api/spots").then(res => res.json());
}

export function postSpot(data) {
  return fetchSpot("POST", data);
}
export function deletSpot(data, id) {
  return fetchSpot("DELETE", data, id);
}

export function patchSpot(data, id) {
  return fetchSpot("PATCH", data, id);
}

function fetchSpot(method, data, id = "") {
  return fetch("/api/spots" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
