import React from 'react';
import './NotFound.css'
import { Button, Card } from 'react-bootstrap';
import img from '../../images/notfound.jpg';
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <Card className="bg-dark text-white mb-5">
                <div className="error-img">
                    <Card.Img src={img} alt="Card image" />
                </div>
                <Card.ImgOverlay>
                    <Card.Title className="error-title">ERROR 404</Card.Title>
                    <NavLink className="nav-bar-list" to="/home">
                        <Button variant="outline-success">Back To Home</Button>
                    </NavLink>


                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default NotFound;