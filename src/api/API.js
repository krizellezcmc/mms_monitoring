import axios from "axios";

let baseURL = "http://192.168.13.233:8000";

///CREATE INSTANCE OF AXIOS
const api = new axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

api.interceptors.request.use(function (config) {
  const Token = sessionStorage.getItem("Token");
  config.headers.Authorization = `Bearer ${Token}`;

  return config;
});

export default api;
