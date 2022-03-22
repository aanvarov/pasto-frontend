import Axios from "axios";
import store from "../store";
import { clearRestaurant } from "../store/auth/reducer";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4001/api/v1"
    : "http://localhost:4001/api/v1";
const axios = Axios.create({ baseURL, withCredentials: true });

axios.interceptors.request.use((configs) => {
  const token = store.getState().account.restaurant.token || "";
  configs.headers.authorization = token ? `Bearer ${token}` : "";
  return configs;
});

axios.interceptors.response.use(
  (res) => {
    console.log("axios res res", res);
    return res;
  },
  (error) => {
    console.log("axios res error", error.response);
    if (error?.response?.status === 401) {
      return store.dispatch(clearRestaurant());
    }
    return Promise.reject(error);
  }
);

export { axios as default };
