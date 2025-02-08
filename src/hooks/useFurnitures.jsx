import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFurnitures = () => {
  const axiosSecure = useAxiosSecure();

  const { data: furnitures = [], refetch, isLoading } = useQuery({
    queryKey: ["furnitures"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/furnitures`);
      return res.data || [];
    },
  });

  return [furnitures, refetch, isLoading];
};

export default useFurnitures;
