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
  data: AddUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const addUserSlice = createSlice({
  name: "AddUser",
  initialState,
  reducers: {
    fetchAddUsersRequest: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    fetchAddUsersSuccess: (state, action: PayloadAction<AddUser>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchAddUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAddUsersRequest, fetchAddUsersSuccess, fetchAddUsersFailure } =
  addUserSlice.actions;
export default addUserSlice.reducer;




