import axios from "axios";
// axios.defaults.withCredentials = true;

<<<<<<< HEAD
const serverUrl = "http://192.168.3.121/mms_backend/api/";
=======
const serverUrl = "http://192.168.3.135/mms_backend/api/";
>>>>>>> kriz

//Custom API to fetch data from the server using axios
const localApi = axios.create({
  // withCredentials: true,
  baseURL: serverUrl,
});

export default localApi;
