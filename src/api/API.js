import axios from "axios";
import { useEffect, useReducer } from "react";

// let baseURL = "http://192.168.13.232:8000/";
let baseURL = "http://192.168.13.233:8000";
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

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const request = async (type, url, data) => {
  let res = [];

  switch (type) {
    case "post":
      res = await api.post({ url }, data);
      break;
    case "put":
      res = await api.put({ url }, data);
      break;
    case "delete":
      res = await api.delete({ url }, data);
      break;
    default:
      res = await api.get({ url }, data);
      break;
  }

  return res;
};

export const useDataApi = (type, initialUrl, initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await request(type, initialUrl, initialData);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [initialUrl]);

  return state;
};

export default api;
