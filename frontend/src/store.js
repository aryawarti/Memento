import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware=[thunk];

const store = configureStore(
  {
    reducer: rootReducer,
  },

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;