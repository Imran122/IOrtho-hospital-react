import React, { useState } from 'react';
import './Registration.css'
import img from '../../../images/appointment.jpg'

import initializeAuthentication from '../../../Firebase/firebase.initialize';

import { Button } from 'react-bootstrap';
import useEmailAuth from '../../../hooks/useEmailAuth';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


initializeAuthentication()
const Registration = () => {
    const {
        handelNameChange,
        error,
        handelRegistration,
        handelPasswordChange,
        handelEmailChange,
        toggleLogIn,
        isLogIn, } = useEmailAuth()

    //google sigin in code here
    const { signUsingGoogle } = useAuth();
    const location = useLocation();

    //function for redirect to the location pages

    const history = useHistory();
    //if you are in login page directly then after login it will send home page other wise it will send that page where you came from
    const redirect_uri = location.state?.from || './home'
    const handelGoogleLogin = () => {

        signUsingGoogle()
            .then(result => {

                history.push(redirect_uri)


            })


    }

    return (
        <>
            <div className="register row mb-2 mt-2 w-75 g-4 mx-auto">

                <div className="card mb-3 card-signup-main mx-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start signup-image " alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{isLogIn ? 'LogIn' : 'Register'} Here</h5>
                                <div>
                                    <p className="text-danger">{error}</p>
                                </div>
                                <form onSubmit={handelRegistration}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onBlur={handelEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" required />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    {!isLogIn &&
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                                            <input onBlur={handelNameChange} type="text" className="form-control" placeholder="Your name" id="examplename" aria-describedby="emailHelp" required />

                                        </div>}
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onBlur={handelPasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="password" required />
                                    </div>
                                    <div className="mb-3 form-check">

                                        <input type="checkbox" onChange={toggleLogIn} label="Check me out" /> Already Have Account?
                                    </div>
                                    <button type="submit" className="btn btn-primary">{isLogIn ? 'LogIn' : 'SignUp'}</button>
                                </form>
                                <div className="mb-3 mt-3 d-flex justify-content-end">
                                    <h6>SignIn By Google</h6>
                                    <Button onClick={handelGoogleLogin} variant="success" className="register-button">
                                        <img src="https://img.icons8.com/color/50/000000/google-logo.png" />
                                        Google
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;