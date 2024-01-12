import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const useAllUsers = (search) => {
    const axiosSecure = useAxiosSecure();
    const [allUsers,setAllUsers] = useState([]);
     useEffect(() => {
        axiosSecure.get(`/users?search=${search}`)
        .then(res => setAllUsers(res.data))
    },[axiosSecure,search]);
    return allUsers;
};

export default useAllUsers;