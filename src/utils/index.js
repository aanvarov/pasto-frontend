import uz from "../lang/uz";
import ru from "../lang/ru";
import en from "../lang/en";
import store from "../store";
import { STYLING_CONFIGS } from "../constants";
const dictionary = {
  ru,
  uz,
  en,
};

export function t(str) {
  const lang = store.getState().account?.lang || "uz";
  if (dictionary[lang][str]) {
    return dictionary[lang][str];
  }
  // return str + '-' + lang;
  return str;
}

export function pxToRem(size) {
  if (typeof size === "number") {
    return `${Number(size / STYLING_CONFIGS.ROOT_SIZE)}rem`;
  }
  throw new Error("size is not a number. Type numbers only");
}

export const getErrorMessage = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      return t("You are not authorized");
    }
    if (error.response.status === 404) {
      return t("Resource not found");
    }
    if (error.response.status === 403) {
      return t("You are not authorized");
    }
    if (error.response.data) {
      return error.response.data.message;
    }
  }

  return error.message;
};
