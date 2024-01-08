import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSale = () => {
    const {user} = useAuth();
    const axiosSecure  = useAxiosSecure();
    const {data:sales =[], refetch,isLoading} = useQuery({
        queryKey:['sales',user],
        queryFn: async () => {
           const res = await axiosSecure.get(`/sale?email=${user.email}`) 
           return res.data
        }
    })
    return [sales,refetch,isLoading]
};

export default useSale;