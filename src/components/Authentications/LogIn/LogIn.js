import React from 'react';
import img from '../../../images/appointment.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';



const LogIn = () => {
    const { signUsingGoogle } = useFirebase();

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
                                <h5 className="card-title">LogIn</h5>
                                <div>
                                    <p className="text-danger"></p>
                                </div>
                                <form >
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <p>Don't have account?<Link to="/registration">SignUp</Link></p>
                                    </div>
                                    <button type="submit" className="btn btn-primary">LogIn</button>
                                </form>
                                <div className="mb-3 mt-3 d-flex justify-content-end">
                                    <h6>SignUp By Google</h6>
                                    <Button onClick={signUsingGoogle} variant="success" className="register-button">
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

export default LogIn;