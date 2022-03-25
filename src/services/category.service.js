import { message } from "antd";
import axios from "../utils/axios";
import { getErrorMessage } from "../utils";

export const CREATE_CATEGORY = async (category) => {
  try {
    const { data } = await axios.post("/categories", category);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const FETCH_CATEGORIES = async () => {
  try {
    const { data } = await axios.get("/categories");
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const FETCH_CATEGORY_DETAILS = async (id) => {
  try {
    const { data } = await axios.get(`/categories/${id}`);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const UPDATE_CATEGORY = async (id, category) => {
  try {
    const { data } = await axios.put(`/categories/${id}`, category);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};

export const DELETE_CATEGORY = async (id, category) => {
  try {
    const { data } = await axios.delete(`/categories/${id}`);
    return data;
  } catch (error) {
    message.error(getErrorMessage(error));
  }
};
