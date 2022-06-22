import { message } from "antd";
import axios from "../utils/axios";
import { getErrorMessage } from "../utils";

export const FETCH_ORDERS = async () => {
  try {
    const { data } = await axios.get("/orders");
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const UPDATE_ORDER = async (id, order) => {
  try {
    const { data } = await axios.put(`/orders/${id}`, order);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const FETCH_ORDER_DETAILS = async (id) => {
  try {
    const { data } = await axios.get(`/orders/${id}`);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};
