import { message } from "antd";
import axios from "../utils/axios";
import { getErrorMessage } from "../utils";

export const CREATE_FOOD = async (food) => {
  try {
    const { data } = await axios.post("/foods", food);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const FETCH_FOODS = async () => {
  try {
    const { data } = await axios.get("/foods");
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};
