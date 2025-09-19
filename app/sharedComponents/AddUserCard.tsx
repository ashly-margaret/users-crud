"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

// 1. Validation schema
const addUserSchema = z.object({
  name: z.string().min(2, "Name is required"),
  username: z.string().min(2, "Username is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone number is required"),
  website: z.string().url("Invalid website").optional(),
  company: z.string().optional(),
  city: z.string().optional(),
});

type AddUserFormValues = z.infer<typeof addUserSchema>;

// 2. Component
export default function AddUserForm({ onSubmit }: { onSubmit: (data: AddUserFormValues) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddUserFormValues>({
    resolver: zodResolver(addUserSchema),
  });

  const submitHandler = (data: AddUserFormValues) => {
    console.log("_test_clicked submitHandler ");
    
    onSubmit(data);
    reset();
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle>Add User</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" {...register("username")} />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" {...register("phone")} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" {...register("website")} />
            {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" {...register("company")} />
             {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} />
             {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>

          <Button type="submit" className="w-full">
            Add User
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
