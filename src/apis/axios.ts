import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
  timeout: Number(process.env.NEXT_PUBLIC_TIME_OUT) || 5000,
  validateStatus: function (status: number) {
    return status >= 200 && status < 300;
  },
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
