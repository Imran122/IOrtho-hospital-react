import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Card, Col, Row } from 'react-bootstrap';
const OurService = (props) => {
    const { id, name, price, about, picture } = props.service;
    //using history to show details
    const history = useHistory()
    const handelButton = () => {
        history.push(`/servicedetails/${id}`)
    }
    return (
        <div>
            <div className="card-group col-md-12 g-4">
                <div className="card col-md-12 g-4 mb-4">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>Price: {price}</h6>
                        <p className="card-text">{about.slice(0, 115)}</p>
                    </div>
                    <div className="card-footer">
                        <Button className="btn-service" onClick={handelButton} variant="outline-success">Details</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurService;