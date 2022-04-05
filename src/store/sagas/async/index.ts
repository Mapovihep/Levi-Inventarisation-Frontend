import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const token = localStorage.getItem("token");
console.log(token)
const config: AxiosRequestConfig = {
  // baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  baseURL: `http://localhost:3001`
};
const instance: AxiosInstance = axios.create(config);
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
export default instance;
