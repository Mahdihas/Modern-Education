import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,sendEmailVerification,GithubAuthProvider , getAuth,updateProfile, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();


    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const updateUserProfile = (profile) => {
        setLoading(true)

        return updateProfile(auth.currentUser, profile);
    }



    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const signIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
        
        return signInWithPopup(auth, googleProvider);
        


    }

    const signInWithGithub = () => {
        setLoading(true)
        
        return signInWithPopup(auth, githubprovider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // why are we doing this?
    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInWithGithub,
        signIn,
        verifyEmail,
        logOut,
        updateUserProfile,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;