'use client'
import AddUser from "@/app/containers/AddUser";
import { ButtonGhost } from "@/app/sharedComponents/Button";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div className="p-4">
      <div className="flex justify-end">
        <ButtonGhost onclick={handleNavigate} label="Back" />
      </div>
      <AddUser />
    </div>
  );
};

export default page;
