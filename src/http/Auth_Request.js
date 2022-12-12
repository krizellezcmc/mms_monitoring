import { Post, Put, Delete } from "../api/Base_Http_Request";

/// LOGIN REQUEST
/// first request for server token
export const LoginRequest = async (data) => {
  return await PostRequest({ url: "api/auth/signin" }, data);
};

/// REGISTER REQUEST
/// first Must request for server token
export const RegisterRequest = async (data) => {
  return await Post({ url: "api/auth/signup" }, data);
};

/// LOGIN REQUEST
/// on logout revoke user token
export const LogoutRequest = async (data) => {
  return await Delete({ url: "api/auth/logout" }, data);
};
