import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //loadin in private route
    const [isLoading, setIsLoading] = useState(true)
    const signUsingGoogle = () => {
        setIsLoading(true)
        //returning it for redirect to the location pagess
        return signInWithPopup(auth, googleProvider)

    }

    //logout for user
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
    }


    //when state change then it will save user data
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    return {
        user,
        error,
        logout,
        signUsingGoogle,
        isLoading
    }
}

export default useFirebase;
