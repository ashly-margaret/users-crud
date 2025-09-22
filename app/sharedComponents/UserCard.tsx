"use client";

import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2, UserRoundPen } from "lucide-react";

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

interface UserCardProps {
  user: userInfo;
  onclick: () => void;
  onclickDelete: () => void;
}

const UserCard = ({ user, onclick, onclickDelete }: UserCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.username}</CardDescription>
        <CardAction>
          <UserRoundPen className="cursor-pointer" onClick={onclick} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div>
          <span>Email</span> : <span>{user.email}</span>
        </div>
        <div>
          <span>Website</span> : <span>{user.website}</span>
        </div>
        <div>
          <span>Phone</span> : <span>{user.phone}</span>
        </div>
        <div>
          <span>City</span> : <span>{user.city}</span>
        </div>
        <div>
          <span>Company</span> : <span>{user.company}</span>
        </div>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Trash2 className="cursor-pointer" onClick={onclickDelete} />
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
