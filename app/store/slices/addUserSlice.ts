import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddUser {
  id: string; 
  name: string; 
  username: string;
  email: string;
  city: string;
  phone: string;
  website: string;
  company: string;
}

interface UserState {
  userData: AddUser | null;
  userLoading: boolean;
  userError: string | null;
}

const initialState: UserState = {
  userData: null,
  userLoading: false,
  userError: null,
};

const addUserSlice = createSlice({
  name: "AddUser",
  initialState,
  reducers: {
    fetchAddUsersRequest: (state, action: PayloadAction<any>) => {
      state.userLoading = true;
    },
    fetchAddUsersSuccess: (state, action: PayloadAction<AddUser>) => {
      state.userLoading = false;
      state.userData = action.payload;
    },
    fetchAddUsersFailure: (state, action: PayloadAction<string>) => {
      state.userLoading = false;
      state.userError = action.payload;
    },
  },
});

export const { fetchAddUsersRequest, fetchAddUsersSuccess, fetchAddUsersFailure } =
  addUserSlice.actions;
export default addUserSlice.reducer;




