import React from 'react';
import Bannar from '../Bannar/Bannar';
import RecentEvent from '../RecentEvent/RecentEvent';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            {/* <Service></Service> */}
            <Services></Services>
            <RecentEvent></RecentEvent>
            <Footer></Footer>
        </div>
    );
};

export default Home;