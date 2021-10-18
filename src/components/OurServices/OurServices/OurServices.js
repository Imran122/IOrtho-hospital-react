import React from 'react';
import useService from '../../../hooks/useService';
import OurService from '../OurService/OurService';
import { Col, Container, Row } from 'react-bootstrap';
const OurServices = () => {
    const [services, setServices] = useService()
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
                        services.map(service => <Col key={service.id}>
                            <OurService service={service}></OurService>
                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default OurServices;