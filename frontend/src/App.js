import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUsPage";
import Index from "./Pages/IndexPage";
import ContactUs from "./Pages/ContactUsPage";
import  { Navigate } from 'react-router'

import CampaignListPage from "./Pages/CampaignListPage";
import MyCampaignsPage from "./Pages/MyCampaignsPage";
import MyDonationsPage from "./Pages/MyDonationsPage";
import DetailedCampaign from "./Pages/DetailedCampaign";
import CreateCampaign from "./Pages/CreateCampaign";
import {ethers} from 'ethers';

// import Campaign from './artifacts/contracts/Campaign.sol/Campaign.json';
// const CAMPAIGN_CONTRACT_ADDRESS = "0x4E817A3c98fF55DFfB17c49942b239679a2d650F";

import CampaignCreator from './artifacts/contracts/CampaignCreator.sol/campaignCreator.json';
const CAMPAIGN_CREATOR_CONTRACT_ADDRESS = "0x4f975F0231DdD09B2eb34842d5F8AA06EA91c1D8";

function App() {

	// const fetchCampaignsSummary = async() => {
	// 	if (typeof window.ethereum !== "undefined") {
	// 		//ethereum is usable get reference to the contract
	// 		const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		const contract = new ethers.Contract(CAMPAIGN_CONTRACT_ADDRESS, Campaign.abi, provider);
	
	// 		//try to get the greeting in the contract
	// 		try {
	// 			const data = await contract.getCampaignSummary();
	// 			console.log("Data: ", data);
	// 		} catch (e) {
	// 			console.log("Err: ", e);
	// 		}
	// 	}
	// }

	const fetchCampaigns = async() => {
		if (typeof window.ethereum !== "undefined") {
			//ethereum is usable get reference to the contract
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(CAMPAIGN_CREATOR_CONTRACT_ADDRESS, CampaignCreator.abi, provider);
	
			//try to get the greeting in the contract
			try {
				const data = await contract.getDeployedCampaigns();
				console.log("Data: ", data);
			} catch (e) {
				console.log("Err: ", e)
			}
		}
	}

	// const transfer = async () => {
	// 	if (typeof window.ethereum !== "undefined") {
	// 		//ethereum is usable, get reference to the contract
	// 		await window.ethereum.request({method: 'eth_requestAccounts'})
	// 		const provider = new ethers.providers.Web3Provider(window.ethereum);
  
	// 		//signer needed for transaction that changes state
	// 		const signer = provider.getSigner();
	// 		const contract = new ethers.Contract(CAMPAIGN_CREATOR_CONTRACT_ADDRESS, CampaignCreator.abi, signer);
			
	// 		//preform transaction
	// 		const transaction = await contract.sendBal("0x4E817A3c98fF55DFfB17c49942b239679a2d650F");
	// 	}
	// }

	// transfer()

	const addCampaigns = async (goal, creator, title, description, period) => {
		if (typeof window.ethereum !== "undefined") {
			//ethereum is usable, get reference to the contract
			await window.ethereum.request({method: 'eth_requestAccounts'})
			const provider = new ethers.providers.Web3Provider(window.ethereum);
  
			//signer needed for transaction that changes state
			const signer = provider.getSigner();
			const contract = new ethers.Contract(CAMPAIGN_CREATOR_CONTRACT_ADDRESS, CampaignCreator.abi, signer);
			
			//preform transaction
			const transaction = await contract.createCampaign(goal, creator, title, description, period);
			await transaction.wait();
			fetchCampaigns();
		}
	}

	// addCampaigns(200, "0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c", "Title", "Desc", "5")


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
				window.location.href = "http://localhost:3000/browse-campaigns"
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
        		<Routes>
					<Route exact path="/" element={<Index connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contact" element={<ContactUs connectWalletHandler={connectWalletHandler} defaultAccount={defaultAccount}/>} />

					<Route exact path="/browse-campaigns" element={<CampaignListPage connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route path="/my-campaigns" element={<MyCampaignsPage connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route path="/my-donations" element={<MyDonationsPage connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />} />
					<Route path="/contact" element={<ContactUs connectWalletHandler={connectWalletHandler} defaultAccount={defaultAccount} />} />
					<Route path="/detailed-campaign-view" element={<DetailedCampaign connectWalletHandler={connectWalletHandler} defaultAccount={defaultAccount} addCampaigns={addCampaigns} />} />
					<Route path="/create-campaign" element={<CreateCampaign connectWalletHandler={connectWalletHandler} defaultAccount={defaultAccount} addCampaigns={addCampaigns} />} />
				</Routes>
      		</Router>
    	</div>
  	);
}

export default App;