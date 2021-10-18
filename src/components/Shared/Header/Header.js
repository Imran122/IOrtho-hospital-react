import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css'
import img from '../../../images/logo/logo.png'
import { NavLink, BrowserRouter as Router, } from 'react-router-dom';
const Header = () => {
    //style active nav 
    const activeStyle = {
        fontWeight: "bold",
        color: "#01d6a3"

    }


    return (
        <>
            <div className="navbar-address mx-auto">
                <Container>

                    <Row className="justify-content-md-center">
                        <Col><p>234/dhanmondi, Dhaka, Bangladesh, BD</p></Col>
                        <Col><p>Mon - Sat 8.00 - 18.00. Sunday CLOSED</p></Col>
                        <Col lg="2" className="appoinment"><p>GET AN APPOINMENT</p></Col>
                    </Row>
                </Container>
            </div>
            {/*  navbar part with options*/}
            <div className="sticky-top">

                <Navbar bg="light" expand="lg" className="w-75 mx-auto" >
                    <Container fluid >
                        <Navbar.Brand href="#">
                            <img src={img} className="brand-img" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/home">Home</NavLink></Nav.Link>

                                <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/ourservices">Services</NavLink></Nav.Link>
                                <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/article">Article</NavLink></Nav.Link>
                                <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/shop">Shop</NavLink></Nav.Link>




                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button className="search-btn">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </>
    );
};

export default Header;