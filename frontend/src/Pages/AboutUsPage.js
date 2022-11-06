import React from 'react';
import Footer from '../Components/Footer';
import MeetOurTeam from '../Components/MeetOurTeam';
import MoreReasons from '../Components/MoreReasons';
import Nav from '../Components/Navbar';
import Overview from '../Components/Overview';

const AboutUs = () => {
    return (
        <div>
            <Nav />
            <Overview />
            <MoreReasons />
            <MeetOurTeam />
            <Footer />
        </div>
    );
}

export default AboutUs;