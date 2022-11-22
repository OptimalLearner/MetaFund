import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUsPage";
import Index from "./Pages/IndexPage";
import ContactUs from "./Pages/ContactUsPage";

import CampaignListPage from "./Pages/CampaignListPage";
import MyCampaignsPage from "./Pages/MyCampaignsPage";
import MyDonationsPage from "./Pages/MyDonationsPage";
import {ethers} from 'ethers';

function App() {
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
				console.log(defaultAccount, userBalance);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension');
		}
	}

    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

  	return (
		<div>
      		<Router>
			{!defaultAccount ?
        		<Routes>
					<Route exact path="/" element={<Index connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contact" element={<ContactUs connectWalletHandler={connectWalletHandler} defaultAccount={defaultAccount}/>} />
				</Routes>
			:
				<Routes>
					<Route exact path="/" element={<CampaignListPage connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route exact path="/my-campaigns" element={<MyCampaignsPage connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route exact path="/my-donations" element={<MyDonationsPage connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route path="/contact" element={<ContactUs connectWalletHandler={connectWalletHandler} defaultAccount={defaultAccount} />} />
				</Routes>
			}
      		</Router>
    	</div>
  	);
}

export default App;