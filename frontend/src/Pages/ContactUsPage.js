import React from 'react';
import Footer from '../Components/Footer';
import Nav from '../Components/Navbar';
import ContactForm from '../Components/ContactForm';
import SignedInNavbar from '../Components/SignedInNavbar';

function ContactUsPage({connectWalletHandler, defaultAccount}) {
    return (
        <div>
            {!defaultAccount ?
                <Nav connectWalletHandler={connectWalletHandler} />
            :
                <SignedInNavbar connectWalletHandler={connectWalletHandler} />
            }
            <ContactForm />
            <Footer />
        </div>
    )
}

export default ContactUsPage;