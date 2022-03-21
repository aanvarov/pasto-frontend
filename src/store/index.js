import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accountReducer from "./auth/reducer";
import persistStore from "redux-persist/es/persistStore";
import logger from "redux-logger";

const rootReducer = combineReducers({
  account: accountReducer,
});

const persistConfig = {
  key: "root",
  whitelist: ["account"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(middlewares),
});

const persistor = persistStore(store);

export { store as default, persistor };
