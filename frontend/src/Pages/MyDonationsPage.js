import React from 'react';
import AboutDonationsBanner from '../Components/AboutDonationsBanner';
import DonatedCampaignSection from '../Components/DonatedCampaignSection';
import Footer from '../Components/Footer';
import SignedInNavbar from '../Components/SignedInNavbar';

function MyDonationsPage({connectWalletHandler}) {
    return (
        <div>
            <SignedInNavbar connectWalletHandler={connectWalletHandler} />
            <AboutDonationsBanner />
            <DonatedCampaignSection />
            <Footer />
        </div>
    );
}

export default MyDonationsPage;