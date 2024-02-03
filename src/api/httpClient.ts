import axios from "axios";
import toast from "react-hot-toast";
export const httpsClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

httpsClient.interceptors.response.use(
  // data
  (res) => res.data,
  // error
  (err) => {
    const errorMessage = err.response
      ? err.response.data.message || "An error occurred"
      : "Network error";

    toast(errorMessage);

    return Promise.reject(err);
  }
);
