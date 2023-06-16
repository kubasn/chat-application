import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 8000,
  withCredentials: false,
});

export default AxiosInstance;
