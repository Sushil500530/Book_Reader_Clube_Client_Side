import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();


    axiosSecure.interceptors.response.use(
        response => response,
        async error => {
            console.log('Error tracked in the interceptor', error.response)
            if (
                error.response &&
                (error.response.status === 401 || error.response.status === 403)
            ) {
                await logoutUser();
                navigate('/login')
            }

            return Promise.reject(error)
        }
    )
    return axiosSecure;
};

export default useAxiosSecure;