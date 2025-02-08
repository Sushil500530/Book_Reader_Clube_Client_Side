import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";

const useFurnitures = () => {
  const [isLoading, setIsLoading] = useState(false)
  const axiosSecure = useAxiosSecure();
  const { data: furnitures = [], refetch, } = useQuery({
    queryKey: ["furnitures"],
    queryFn: async () => {
      setIsLoading(true)
      const res = await axiosSecure.get(`/furnitures`)
      if (res?.data?.length > 0) {
        setIsLoading(false)
        return res.data;
      }
    }
  })
  return [furnitures, refetch, isLoading]
};

export default useFurnitures;