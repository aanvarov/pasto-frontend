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

export const FETCH_FOOD_DETAILS = async (id) => {
  try {
    const { data } = await axios.get(`/foods/${id}`);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const UPDATE_FOOD = async (id, food) => {
  try {
    const { data } = await axios.put(`/foods/${id}`, food);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const DELETE_FOOD = async (id) => {
  try {
    const { data } = await axios.delete(`/foods/${id}`);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};
