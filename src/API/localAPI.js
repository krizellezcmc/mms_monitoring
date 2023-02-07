import axios from "axios";
// axios.defaults.withCredentials = true;

const serverUrl = "http://192.168.3.121/mms_backend/api/";

//Custom API to fetch data from the server using axios
const localApi = axios.create({
  // withCredentials: true,
  baseURL: serverUrl,
});

export default localApi;
