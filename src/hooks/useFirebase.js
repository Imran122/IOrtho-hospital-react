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
        //returning it for redirect to the location pagess
        return signInWithPopup(auth, googleProvider)

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
