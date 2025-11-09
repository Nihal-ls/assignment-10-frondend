import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/Firebase.config';
import { AuthContext } from './AuthContext';
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUSer] = useState(null)

    const [loading, setLoading] = useState(true)

    const signInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // signOut 
    const signOutuser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUSer(currentUser)
            console.log(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        setUSer,
        loading,
        signInwithGoogle,
        signOutuser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;