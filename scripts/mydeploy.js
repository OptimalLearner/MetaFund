const hre=require("hardhat");
async function main(){
const Campaign=await hre.ethers.getContractFactory("Campaign");
const campaign=await Campaign.deploy(10,"0x70997970C51812dc3A010C7d01b50e0d17dc79C8","ABC","XYZ",5);
   await campaign.deployed();
   console.log("Campaign Deployed to:",campaign.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  