import axios from "axios";



export const DEV_URL = "";

export const api = axios.create({
  baseURL: DEV_URL,
});

api.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem("token");
     if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const API = {
  v1: {
  },
};
