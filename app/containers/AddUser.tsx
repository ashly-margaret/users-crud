"use client";
import React from "react";
import AddUserForm from "../sharedComponents/AddUserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddUsersRequest } from "../store/slices/addUserSlice";
import { RootState } from "../store/store";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const AddUser = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.AddUser
  );

  const handleAddUser = (payload: any) => {
    console.log("_test_clicked handleAddUser", payload);
    dispatch(fetchAddUsersRequest(payload));

    if (data) {
      toast.success(JSON.stringify(data));
    }
    if (error) {
      toast.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }}
        className="!z-[9999]"
      />

      <AddUserForm onSubmit={handleAddUser} />
    </div>
  );
};

export default AddUser;
