import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import img from '../../../images/single.jpg'
import './Doctor.css'
const Doctor = () => {
    return (
        <div className="doctor-details">
            <div className="container-fluid w-75">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-md-12 text-center">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="card-block px-5 doctor-content">
                            <h6 className="card-title">OUR MEDICAL</h6>
                            <h2 className="card-text">We’re Setting the Standards in Research & Clinical Care</h2>
                            <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help. Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the USA with over 35 years of quality training and experience.</p>
                            <Button variant="secondary" className="btn-doctor">VIEW MORE</Button>
                            <Button variant="secondary" className="btn-doctor">CONTACT US</Button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Doctor;