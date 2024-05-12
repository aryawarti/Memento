import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const middleware=[thunk];

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(...middleware)
);

export default store;