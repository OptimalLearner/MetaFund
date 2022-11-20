import React from 'react';
import Footer from '../Components/Footer';
import SignedInNavbar from '../Components/SignedInNavbar';

const Index = ({connectWalletHandler}) => {
    return (
        <div>
            <SignedInNavbar connectWalletHandler={connectWalletHandler} />
            <Footer />
        </div>
    );
}

export default Index;