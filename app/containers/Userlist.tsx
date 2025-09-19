"use client";

import React, { useEffect, useState } from "react";
import UserCard from "../sharedComponents/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../store/slices/userSlice";
import { RootState } from "../store/store";
import { ButtonGhost } from "../sharedComponents/Button";
import { useRouter } from "next/navigation";
import DialogueBox from "../sharedComponents/DialogueBox";

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
  const [mappedUsers, setMappedUsers] = useState<userInfo[]>([]);
  const [popUp, setPopUp] = useState(false);
  const [selectedUser,setSelectedUser] = useState<userInfo|any>(null)

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

  const handlePoup = (user : userInfo) => {
    setPopUp(true);
    setSelectedUser(user)
  };

  const handleClose = () => {
    setPopUp(false);
  };

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-amber-900 font-bold">Userlist</h1>
        <ButtonGhost onclick={handleNavigate} label="Add User" />
      </div>

      <div className="grid grid-cols-4 gap-4 p-6">
        {mappedUsers.map((user: any, index: any) => {
          return <UserCard user={user} key={index} onclick={()=>{handlePoup(user)}} />;
        })}
        {popUp && <DialogueBox popUp={popUp} handleClose={handleClose} selectedUser={selectedUser} />}
      </div>
    </div>
  );
};

export default Userlist;
