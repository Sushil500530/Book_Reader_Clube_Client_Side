import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllManagers = () => {
   const axiosSecure = useAxiosSecure();
   const {data:managers,refetch,isLoading} = useQuery({
    queryKey: ['managers'],
    queryFn:async()=>{
        const res = await axiosSecure.get('/managers')
        return res.data;
    }
   })
   return [managers,refetch,isLoading];
};

export default useAllManagers;