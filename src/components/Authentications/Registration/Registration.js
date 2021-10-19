import React, { useState } from 'react';
import './Registration.css'
import img from '../../../images/appointment.jpg'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../../Firebase/firebase.initialize';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


initializeAuthentication()
const Registration = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //save data in user
    const [user, setUser] = useState({})
    //error hande for registration errors
    const [error, setError] = useState('')

    const handelEmailChange = e => {
        setEmail(e.target.value)
    }
    const handelPasswordChange = e => {
        setPassword(e.target.value)
    }

    const handelRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 charecters")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);

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
                                <h5 className="card-title">Register Here</h5>
                                <div>
                                    <p className="text-danger">{error}</p>
                                </div>
                                <form onSubmit={handelRegistration}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onBlur={handelEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onBlur={handelPasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <p>Already have account?<Link to="/login">Login</Link></p>
                                    </div>
                                    <button type="submit" className="btn btn-primary">SignUp</button>
                                </form>
                                <div className="mb-3 mt-3 d-flex justify-content-end">
                                    <h6>SignIn By Google</h6>
                                    <Button variant="success" className="register-button">
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