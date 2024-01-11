import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentD = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:payments,refetch,isLoading} = useQuery({
        queryKey:['payments', user],
        queryFn: async() => {
           const res = await axiosSecure.get(`/payment?email=${user?.email}`)
           return res.data
        },
    })
    return [payments,refetch,isLoading]
};

export default usePaymentD;