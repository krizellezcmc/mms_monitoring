import axios from "axios";

// let baseURL = "http://192.168.13.232:8000/";
let baseURL = "http://localhost:8000";
// http://192.168.13.232:8000/api/item

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
