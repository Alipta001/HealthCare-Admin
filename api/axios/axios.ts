import axios from "axios";
import { Cookies } from "react-cookie";
export const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";


console.log("BaseURL:", BaseURL);
export const AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,   // ✅ REQUIRED
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const cookie = new Cookies();
    const token = cookie.get("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers["x-access-token"] = token; 
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);