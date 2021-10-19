import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


//here using rest for store the rest data except children
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    return (

        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect

                to={{
                    pathname: "/registration",
                    state: { from: location }
                }}

            ></Redirect>}
        >



        </Route>
    );
};

export default PrivateRoute;