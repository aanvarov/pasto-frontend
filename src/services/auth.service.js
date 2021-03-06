import { message } from "antd";
import axios from "../utils/axios";
import { getErrorMessage } from "../utils";

export const SIGN_UP = async (user) => {
  try {
    const { data } = await axios.post("/auth/restaurants/signup", user);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const SIGN_IN = async (user) => {
  try {
    const { data } = await axios.post("/auth/restaurants/sessions", user);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};
