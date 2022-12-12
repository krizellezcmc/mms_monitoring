import { Post, Get, Put, Delete } from "../api/Base_Http_Request";

export const LogsPostRequest = async (data) => {
  return await Post({ url: "api/logs" }, data);
};

export const LogsGetRequest = async (data) => {
  return await Get({ url: "api/logs" }, data);
};

export const LogsPutRequest = async (data) => {
  return await Put({ url: "api/logs" }, data);
};

export const LogsDeleteRequest = async (data) => {
  return await Delete({ url: "api/logs" }, data);
};
