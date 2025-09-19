import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface DialogueBoxTypes {
  popUp: boolean;
  handleClose: () => void;
  selectedUser: any; // ideally type this with your AddUser interface
  onSubmit: (data :any) => void;
}

const DialogueBox = ({ popUp, handleClose, selectedUser , onSubmit }: DialogueBoxTypes) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      company: "",
      city: "",
    },
  });

    const dispatch = useDispatch();


  // ✅ Whenever selectedUser changes, reset form with its values
  useEffect(() => {
    if (selectedUser) {
      reset({
        name: selectedUser.name || "",
        username: selectedUser.username || "",
        email: selectedUser.email || "",
        phone: selectedUser.phone || "",
        website: selectedUser.website || "",
        company: selectedUser.company || "",
        city: selectedUser.city || "",
      });
    }
  }, [selectedUser, reset]);

  const submitHandler = (data: any) => {
    console.log("Edited user:", data);
  
        onSubmit(data)
    
    
    handleClose();
  };

  return (
    <Dialog open={popUp} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            You can update user details here.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} />
          </div>

          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" {...register("username")} />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" {...register("phone")} />
          </div>

          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" {...register("website")} />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" {...register("company")} />
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} />
          </div>

          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>

        <DialogFooter>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogueBox;
