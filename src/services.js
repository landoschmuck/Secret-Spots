import axios from "axios";

export function getSpots() {
  return axios.get("/api/spots");
}

export function postSpot(data) {
  return axios.post("/api/spots/", data);
}

export function deleteSpot(id) {
  return axios.delete("/api/spots/" + id, id);
}

export function patchSpot(data, id) {
  return axios.patch("/api/spots/" + id, data, id);
}
