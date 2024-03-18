import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useFindMananger = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: currentManager = [], refetch, isLoading } = useQuery({
        queryKey: ["managers"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/manager?email=${user?.email}`);
            return res.data;
        }
    })
    return [currentManager, refetch, isLoading]
};

export default useFindMananger;