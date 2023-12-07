import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

export const useAuth = () => {
    const authConnect = useContext(AuthContext);
    return authConnect;
}