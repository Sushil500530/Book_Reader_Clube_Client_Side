import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data:users=[], refetch,isLoading} = useQuery({
        queryKey:['users',user],
        queryFn: async () => {
            if(user){
                const res = await axiosSecure.get(`users/${user?.email}`);
                // const data = await res.json();
                return res.data;
            }
        }
    })
    return [users,refetch,isLoading]
};

export default useRole;