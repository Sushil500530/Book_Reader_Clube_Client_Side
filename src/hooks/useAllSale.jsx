import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllSale = () => {
   const axiosSecure = useAxiosSecure();
   const {data:allSales,refetch,isLoading} = useQuery({
    queryKey: ["allSales"],
    queryFn: async()=>{
        const res = await axiosSecure.get("sales")
        return res.data;
    }
   })
   return [allSales,refetch,isLoading]
};

export default useAllSale;