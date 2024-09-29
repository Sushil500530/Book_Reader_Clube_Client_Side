import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://furni-track-project-server-side.vercel.app",
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();
    useEffect(() => {
        axiosSecure?.interceptors?.response?.use(res => {
           // console.log(res);
            return res;
        }, error => {
        //    console.log('error is find here----->',error);
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                logoutUser()
                    .then(() => {
                        toast.error('cannot find your token! please log in again...');
                        return navigate('/login')
                    })
                    .catch(error => console.error(error))
            }
        })
    }, [navigate, logoutUser])
    return axiosSecure;
};

export default useAxiosSecure;