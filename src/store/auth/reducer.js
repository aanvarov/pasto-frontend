import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    token: null,
    name: "",
    phone: "",
    workPhone: "",
    address: "",
    email: "",
    password: "",
    active: false,
    paid: false,
    website: "",
    imgUrl: "",
    workdays: [],
    openHour: "",
    closeHour: "",
    delivery: false,
    takeOut: false,
    geoLocation: "",
    superAdmin: false,
  },
};

export const profileSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    clearRestaurant: (state, action) => {
      return initialState.restaurant;
    },
    updateRestaurant: (state, action) => {
      return {
        ...state,
        restaurant: {
          ...state.restaurant,
          ...action.payload,
        },
      };
    },
  },
});

export const { clearRestaurant, updateRestaurant } = profileSlice.actions;
export default profileSlice.reducer;
