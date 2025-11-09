import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
    // sign with email and pass

    const createUser = (email, password,name,photo) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                return updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    setUSer({ ...res.user }); 
                    return res.user;
                });
            })
            .finally(() => setLoading(false));
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
        signOutuser,
        createUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;