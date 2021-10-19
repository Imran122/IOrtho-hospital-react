import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';
import { useLocation, useHistory } from 'react-router-dom';


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
    //load to the desire  pagess
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || './home'

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

                setUser(user)
                setError('');
                history.push(redirect_uri)
                location.reload(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //profile update code
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    //create new user

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed up 
                setUser(result.user);
                setUserName();

                setError('');
                history.push(redirect_uri)
                location.reload(redirect_uri);

            })
            .catch((err) => {
                setError(err.message);
            })

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
        handelNameChange,
        processLogin

    }
};

export default useEmailAuth;