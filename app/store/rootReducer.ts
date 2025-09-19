import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";
import addUserReducer from "../store/slices/addUserSlice"

const rootReducer = combineReducers({
  users: userReducer,
  AddUser: addUserReducer,
});

export default rootReducer;
