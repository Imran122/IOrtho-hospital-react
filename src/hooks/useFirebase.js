import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    //logout for user
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }


    //when state change then it will save user data
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("inside state change")
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        logout,
        signUsingGoogle
    }
}

export default useFirebase;
