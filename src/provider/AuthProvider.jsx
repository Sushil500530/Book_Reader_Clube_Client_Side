
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[])










    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,


    }
    return (
        <AuthContext.Provider value={authInfo}>
    {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;