import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeleteUser {
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
  deleteUserData: DeleteUser | null;
  deleteUserLoading: boolean;
  deleteUserError: string | null;
}

const initialState: UserState = {
  deleteUserData: null,
  deleteUserLoading: false,
  deleteUserError: null,
};

const deleteUserSlice = createSlice({
  name: "DeleteUser",
  initialState,
  reducers: {
    fetchDeleteUsersRequest: (state, action: PayloadAction<any>) => {
      state.deleteUserLoading = true;
    },
    fetchDeleteUsersSuccess: (state, action: PayloadAction<any>) => {
      state.deleteUserLoading = false;
      state.deleteUserData = action.payload;
    },
    fetchDeleteUsersFailure: (state, action: PayloadAction<string>) => {
      state.deleteUserLoading = false;
      state.deleteUserError = action.payload;
    },
  },
});

export const { fetchDeleteUsersRequest, fetchDeleteUsersSuccess, fetchDeleteUsersFailure } =deleteUserSlice.actions;
export default deleteUserSlice.reducer;




