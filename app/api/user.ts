import axios from "axios";
import { users } from "./endpoints";

export const fetchUserDetailsApi = async () => {
  const response = await axios.get(users);

  if (response?.status === 200) {
    return response;
  } else {
    throw new Error(response.data.message || "Failed to fetch users");
  }
};

export const fetchAddUserDetailsApi = async (data: any) => {
  const response = await axios.post(users, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("response add user", response);
  if (response.status === 201 || response.status === 200) {
    const response = "Successfully Added";

    return response;
  } else {
    throw new Error(response.data.message || "Failed to add user");
  }
};

export const fetchUpdateUserDetailsApi = async (id :any ,data: any  ) => {
  console.log("update_data",id,data);
  
  const response = await axios.put(`${users}/${id}`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("response update user", response);
  if (response.status === 201 || response.status === 200) {
    const response = "Successfully Updated";

    return response;
  } else {
    throw new Error(response.data.message || "Failed to add user");
  }
};

