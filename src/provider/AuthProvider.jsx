/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {


    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: "ease-in-out", // Easing type
          once: false, // Whether animation should happen only once
        });
      }, []);

    const axiosPublic = useAxiosPublic();
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
    const updataUserProfile = (name,photo)=> {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }
   
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setLoading(false);
            setUser(currentUser);
            const emailInUser = currentUser?.email || user?.email;
            const loggedUserEmail = {email: emailInUser};
            if(currentUser){
                axiosPublic.post('/jwt', loggedUserEmail)
                .then(() => {})
            }
            else{
                axiosPublic.post('/logout', loggedUserEmail)
                .then(() => {})
            }
            
        })
        return () => {
            unsubscribe();
        }
    },[axiosPublic,user?.email])

    
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleSignIn,
        updataUserProfile,

    }
    return (
        <AuthContext.Provider value={authInfo}>
    {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;