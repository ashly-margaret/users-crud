import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";
import addUserReducer from "../store/slices/addUserSlice"
import updateUserReducer from "../store/slices/updateUserSlice"

const rootReducer = combineReducers({
  users: userReducer,
  AddUser: addUserReducer,
  UpdateUser : updateUserReducer,
});

export default rootReducer;
