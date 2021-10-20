import React from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import Patient from '../Patients/Patient';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Doctor></Doctor>

            <Services></Services>

            <Patient></Patient>
        </div>
    );
};

export default Home;