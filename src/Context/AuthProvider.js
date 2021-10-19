import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useEmailAuth from '../hooks/useEmailAuth';


export const AuthContext = createContext();
//this context will use for authorization.it sending value by allcontext
const AuthProvider = (props) => {
    const { children } = props;
    const allContext = useFirebase();

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;