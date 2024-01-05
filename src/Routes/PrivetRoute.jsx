import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../shared/Loader";

const PrivetRoute = ({children}) => {
   const {user,loading} = useAuth();
   const location = useLocation();
   if(loading){
    return <Loader />
   }
//    console.log(user?.email);
   if(user){
    return children;
   }
   return <Navigate to='/login' state={location?.pathname} replace ></Navigate>
};

export default PrivetRoute;