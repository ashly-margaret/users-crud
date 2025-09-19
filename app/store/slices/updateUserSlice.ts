import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateUser {
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
  updateUserData: UpdateUser | null;
  updateUserLoading: boolean;
  updateUserError: string | null;
}

const initialState: UserState = {
  updateUserData: null,
  updateUserLoading: false,
  updateUserError: null,
};

const updateUserSlice = createSlice({
  name: "UpdateUser",
  initialState,
  reducers: {
    fetchUpdateUsersRequest: (state, action: PayloadAction<any>) => {
      state.updateUserLoading = true;
    },
    fetchUpdateUsersSuccess: (state, action: PayloadAction<UpdateUser>) => {
      state.updateUserLoading = false;
      state.updateUserData = action.payload;
    },
    fetchUpdateUsersFailure: (state, action: PayloadAction<string>) => {
      state.updateUserLoading = false;
      state.updateUserError = action.payload;
    },
  },
});

export const { fetchUpdateUsersRequest, fetchUpdateUsersSuccess, fetchUpdateUsersFailure } =
  updateUserSlice.actions;
export default updateUserSlice.reducer;




