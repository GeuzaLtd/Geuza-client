import { store } from "@/redux/store";
import axios from "axios";

// Regular API instance (no subdomain)
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

export default axiosInstance;
