import axios from "axios";
import { Cookies } from "react-cookie";
export const BaseURL = /*process.env.NEXT_PUBLIC_BACKEND_URL ||*/ "http://localhost:4000";


console.log("BaseURL:", BaseURL);
export const AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
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


AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const res = await axios.post(
        `${BaseURL}/admin/refresh-token`,
        {},
        { withCredentials: true }
      );

      const newAccessToken = res.data.token;

      const cookies = new Cookies();
      cookies.set("token", newAccessToken, {
        path: "/",
        sameSite: "lax",
      });

      originalRequest.headers["x-access-token"] = newAccessToken;

      return AxiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);
