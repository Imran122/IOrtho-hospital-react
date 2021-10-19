import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

//here using rest for store the rest data except children
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
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