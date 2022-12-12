import axios from "axios";

let baseURL = "http://localhost:8000/";
// let baseURL = "http://API HERE:8000/";

///CREATE INSTANCE OF AXIOS
const api = new axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

///ON REQUEST ATTACH AUTHORIZATION ON AXIOS INSTANCE
api.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
