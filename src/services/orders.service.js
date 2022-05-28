import { message } from "antd"
import axios from '../utils/axios'
import {getErrorMessage} from "../utils";

export const FETCH_ORDERS = async () => {
  try {
    const { data } = await axios.get("/orders");
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};
