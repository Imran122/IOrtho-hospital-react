import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item className="banner-content">
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>I-Ortho Hospital</h3>
                        <p>Quality is our brand and service is our commitment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-content">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>I-Ortho Hospital</h3>
                        <p>Quality is our brand and service is our commitment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-content">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>I-Ortho Hospital</h3>
                        <p>Quality is our brand and service is our commitment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;