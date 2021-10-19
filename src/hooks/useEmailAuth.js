import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication()
const useEmailAuth = () => {

    const [isLogIn, setIslogIn] = useState(false)
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    //save data in user
    const [user, setUser] = useState({})
    //error hande for registration errors
    const [error, setError] = useState('')
    //toggle login system functions 


    const toggleLogIn = (e) => {
        setIslogIn(e.target.checked)

    }
    //for email type change function handeling
    const handelEmailChange = e => {
        setEmail(e.target.value)
    }
    const handelPasswordChange = e => {
        setPassword(e.target.value)
    }
    //for name change functrion
    const handelNameChange = e => {
        setName(e.target.value)
    }

    const handelRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 charecters")
            return;
        }
        // condition for login or signup
        if (isLogIn) {
            processLogin(email, password)
        }
        else {
            createNewUser(email, password)
        }


    }

    //login code here
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
    }


    //create new user
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                setUserName();
                console.log(result.user);
                setError('');

            })
            .catch((err) => {
                setError(err.message);
            })
    }
    //profile update code
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    return {
        email,
        password,
        user,
        error,
        handelRegistration,
        handelPasswordChange,
        handelEmailChange,
        toggleLogIn,
        isLogIn,
        handelNameChange

    }
};

export default useEmailAuth;