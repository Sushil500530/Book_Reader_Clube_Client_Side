
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const useFavorite = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const {data:favorites,refetch,isLoading} = useQuery({
    queryKey:['favorites', user],
    queryFn: async () => {
        const res = await axiosSecure.get(`/favorites?email=${user.email}`)
        return res.data
    }
  })
   return [favorites,refetch,isLoading]
};

export default useFavorite;