import React from 'react';


import Banner from '../Banner/Banner';
import Categorey from '../Appointment/Appointment';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import Appointment from '../Appointment/Appointment';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Doctor></Doctor>

            <Services></Services>

            <Appointment></Appointment>
        </div>
    );
};

export default Home;