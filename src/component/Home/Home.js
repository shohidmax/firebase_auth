import React from 'react';
import Bannar from '../Bannar/Bannar';
import Service from '../Service/Service';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            {/* <Service></Service> */}
            <Services></Services>
        </div>
    );
};

export default Home;