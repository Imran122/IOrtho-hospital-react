import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Patient.css'
import img from '../../../images/patient.jpg'
const Patient = () => {
    return (
        <div>
            <div className="patients-feedback">
                <div className="feedback-content">
                    <Container className="">
                        <Row>
                            <h6>Happy Patients</h6>
                            <h3>What Our Patients Are Saying</h3>
                            <Col sm={6} md={12}>
                                <Image src={img} roundedCircle />
                            </Col>
                            <Col sm={6} md={12}>
                                <blockquote className="feedback-text">Great co workers, really good environment and excellent patient care. They are continuously innovating themselves which is why they remain a premier dental clinic.This was the cleanest medical establishment I've ever been in. They just loved the welcoming and warm atmosphere in there.</blockquote>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Patient;



