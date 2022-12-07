require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks:{
    matic:{
      url:"https://rpc-mumbai.maticvigil.com",
      accounts:[process.env.METAMASK_ACCOUNT1_PRIVATE_KEY]
    }
  }
};
//0xAe46db619d7F55Fbb016c96dBf897c78053A0f3F