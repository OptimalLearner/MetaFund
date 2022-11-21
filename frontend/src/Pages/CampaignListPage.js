import React from 'react';
import AboutCampaignsBanner from '../Components/AboutCampaignsBanner';
import CampaignSection from '../Components/CampaignSection';
import Footer from '../Components/Footer';
import SignedInNavbar from '../Components/SignedInNavbar';

const Index = ({connectWalletHandler}) => {
    return (
        <div>
            <SignedInNavbar connectWalletHandler={connectWalletHandler} />
            <AboutCampaignsBanner />
            <CampaignSection />
            <Footer />
        </div>
    );
}

export default Index;