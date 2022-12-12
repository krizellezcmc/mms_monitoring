import api from "./API";

/// CUSTOM POST REQUEST
export const Post = async ({ url }, data) => {
  return await api.post(url, data);
};

/// CUSTOM GET REQUEST
export const Get = async ({ url }, data) => {
  return await api.get(url, data);
};

/// CUSTOM PUT REQUEST
export const Put = async ({ url }, data) => {
  return await api.put(url, data);
};

/// CUSTOM DELETE REQUEST
export const Delete = async ({ url }, data) => {
  return await api.delete(url, data);
};
