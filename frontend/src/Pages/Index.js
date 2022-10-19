import React from 'react';
import CampaignsOverview from '../Components/CampaignsOverview';
import Footer from '../Components/Footer';
import InfoSection from '../Components/InfoSection';
import Nav from '../Components/Navbar';
import QuoteSection from '../Components/QuoteSection';
import Services from '../Components/Services';
import Values from '../Components/Values';

const Index = () => {
    return (
        <div>
            <Nav />
            <InfoSection />
            <Values />
            <QuoteSection />
            <Services />
            <CampaignsOverview />
            <Footer />
        </div>
    );
}

export default Index;