import { combineReducers } from "redux";
import useLoginReducer from "./useLoginReducer";

const rootReducer = combineReducers({
  userLogin: useLoginReducer,
});

export default rootReducer;