import { useQuery } from "@tanstack/react-query";

const useFurCategory = () => {
   const {data:category=[], refetch,isLoading} = useQuery({
    queryKey:["categories"],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        return data;
    }
   })
   return [category,refetch,isLoading]
};

export default useFurCategory;