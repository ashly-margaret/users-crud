import axios from "axios";
import { users } from "./endpoints";

export const fetchUserDetailsApi = async () => {
    const response = await axios.get(users);
    
    if (response?.status === 200) {
        return response;
    } else {
        throw new Error(response.data.message || 'Failed to fetch users');
    }
}