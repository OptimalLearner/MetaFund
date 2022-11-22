import React from 'react';
import AboutCreateCampaignBanner from '../Components/AboutCreateCampaignBanner';
import MyCampaignSection from '../Components/MyCampaignSection';
import Footer from '../Components/Footer';
import SignedInNavbar from '../Components/SignedInNavbar';

function MyDonationsPage({connectWalletHandler}) {
    return (
        <div>
            <SignedInNavbar connectWalletHandler={connectWalletHandler} />
            <AboutCreateCampaignBanner />
            <MyCampaignSection />
            <Footer />
        </div>
    );
}

export default MyDonationsPage;