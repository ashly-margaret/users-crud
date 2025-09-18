import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
