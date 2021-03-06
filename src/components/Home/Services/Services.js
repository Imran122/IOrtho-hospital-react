import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useService()
    const servicesItems = services.slice(0, 6)
    return (
        <div>
            <Container className="categories">
                <Row className="mt-3 mb-3">
                    <Col>
                        <h3 className="service-text"> Hospital <span className="text-span">Services</span></h3>

                    </Col>
                </Row>

                <Row xs={1} md={3} className="g-2">

                    {
                        servicesItems.map(service => <Col key={service.id}>
                            <Service service={service}></Service>
                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Services;