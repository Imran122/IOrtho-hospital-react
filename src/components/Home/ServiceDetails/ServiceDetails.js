import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const { serviceid } = useParams();
    const [singleService, setSingleService] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Imran122/fakedb/main/fakedata.JSON')
            .then(response => response.json())
            .then(data => setSingleService(data))
    }, [])
    let result = singleService.find(service => service.id === serviceid)
    console.log(result)
    return (
        <>
            {result &&

                <div className="details-service container-fluid">
                    <div className="service-content  mb-5">
                        <Card.Img className="w-75 service-details-Img" variant="top" src={result.picture} />
                        <div className="description w-75 mt-5 container-fluid">
                            <h3>{result.name}</h3>

                            <p > {result.about}</p>

                        </div>
                    </div>
                </div>



            }

        </>
    );
};

export default ServiceDetails;