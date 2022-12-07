const hre = require("hardhat");

async function main() {
	// const currentTimestampInSeconds = Math.round(Date.now() / 1000);
	// const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
	// const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

	// const lockedAmount = hre.ethers.utils.parseEther("1");

	// const Lock = await hre.ethers.getContractFactory("Lock");
	// const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

	// await lock.deployed();

	// console.log(
	//   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
	// );

	const CampaignCreator = await hre.ethers.getContractFactory("campaignCreator");
	const campaignCreator = await CampaignCreator.deploy();
	// 200, "0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c", "Title", "Desc", "5"
	await campaignCreator.deployed();
  
	console.log(`Campaign Creator deployed to ${campaignCreator.address}`);


	const Campaign = await hre.ethers.getContractFactory("Campaign");
	const campaign = await Campaign.deploy(200, "0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c", "Title", "Desc", "5");
	// 200, "0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c", "Title", "Desc", "5"
	await campaign.deployed();
  
	console.log(`Campaign deployed to ${campaign.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
