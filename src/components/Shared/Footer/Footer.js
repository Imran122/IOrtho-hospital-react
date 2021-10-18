import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <Container className="mb-0 w-100 mx-auto footer-content">

                <footer>
                    <Row>
                        <Col sm={4} lg={4}>
                            <h4>I-Ortho Hospital</h4>
                            <ul className="list-unstyled">
                                <li>097888776788</li>
                                <li>Bannai,Dhaka</li>
                                <li>Bangladesh, BD</li>
                            </ul>
                        </Col>
                        <Col sm={4} lg={4}>
                            <h4>Privacy & Policy</h4>
                            <ul className="list-unstyled">
                                <li>Privacy</li>
                                <li>Setting</li>
                                <li>Terms & Service</li>
                            </ul>
                        </Col>
                        <Col sm={4} lg={4}>
                            <h4>Company</h4>
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="row">
                        <p className="col-sm">
                            @copy;{new Date().getFullYear()} I-Ortho Hospital | All right Reserved | Terms & Service | Privacy
                        </p>
                    </div>
                </footer>
            </Container>

        </>
    );
};

export default Footer;