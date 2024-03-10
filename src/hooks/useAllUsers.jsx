import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure();
   const {data:allUsers,refetch,isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: async() => {
       const res = await axiosSecure.get('/users')
        return res.data;
    }
   })
   return [allUsers,refetch,isLoading]
};

export default useAllUsers;