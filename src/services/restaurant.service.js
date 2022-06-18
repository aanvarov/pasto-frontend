import { message } from "antd";
import axios from "../utils/axios";
import { getErrorMessage } from "../utils";

export const UPDATE_RESTAURANT = async (id, restaurant) => {
  try {
    const { data } = await axios.put(`/restaurants/${id}`, restaurant);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};
