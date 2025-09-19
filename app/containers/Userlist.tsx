"use client";

import React, { useEffect, useState } from "react";
import UserCard from "../sharedComponents/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../store/slices/userSlice";
import { RootState } from "../store/store";
import { ButtonGhost } from "../sharedComponents/Button";
import { useRouter } from "next/navigation";
import DialogueBox from "../sharedComponents/DialogueBox";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { fetchUpdateUsersRequest } from "../store/slices/updateUserSlice";

interface userInfo {
  id: string; // keep original id
  name: string; // rename "name" to "label"
  username: string;
  email: string;
  city: string;
  phone: string;
  website: string;
  company: string;
}

const Userlist = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const { updateUserData, updateUserLoading, updateUserError } = useSelector(
    (state: RootState) => state.UpdateUser
  );
  const [mappedUsers, setMappedUsers] = useState<userInfo[]>([]);
  const [popUp, setPopUp] = useState(false);
  const [selectedUser, setSelectedUser] = useState<userInfo | any>(null);

  const handleNavigate = () => {
    router.push("pages/addUser");
  };

  useEffect(() => {
    if (data) {
      const transformed = data.map((user: any, index: number) => ({
        id: user?.id, // keep original id
        name: user?.name, // rename "name" to "label"
        username: user?.username,
        email: user?.email,
        city: user?.address?.city,
        phone: user.phone,
        website: user.website,
        company: user?.company?.name,
      }));
      setMappedUsers(transformed);
    }
  }, [data]);

  const handlePoup = (user: userInfo) => {
    console.log("selected", user);

    setPopUp(true);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setPopUp(false);
  };

  const onSubmit = (id: any, data: userInfo) => {
    // 👉 You can dispatch an updateUser action here
    console.log("updatedData", id, data);

    dispatch(fetchUpdateUsersRequest({ id, data }));

    if (updateUserData) {
      console.log("userData", updateUserData);

      toast.success(JSON.stringify(updateUserData));
    }
    if (updateUserError) {
      toast.error(updateUserError);
    }
  };

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <div className="p-6 ">
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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-amber-900 font-bold">Userlist</h1>
        <ButtonGhost onclick={handleNavigate} label="Add User" />
      </div>

      <div className="grid grid-cols-4 gap-4 p-6">
        {mappedUsers.map((user: any, index: any) => {
          console.log("user", user);

          return (
            <UserCard
              user={user}
              key={index}
              onclick={() => {
                handlePoup(user);
              }}
            />
          );
        })}
        {popUp && (
          <DialogueBox
            popUp={popUp}
            handleClose={handleClose}
            selectedUser={selectedUser}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Userlist;
