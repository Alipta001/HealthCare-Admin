import axios from "axios";
import { Cookies } from "react-cookie";

export const BASE_URL = "http://localhost:4000";
export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const cookie = new Cookies();
    const token = cookie.get("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
