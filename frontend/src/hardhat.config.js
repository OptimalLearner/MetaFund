require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks:{
    matic:{
      url:"https://rpc-mumbai.maticvigil.com",
      accounts:["c74d0e8e375097b00c4581eb966f8b30d0e487064dfa524bd98362d300c07f08"],
      gas: 2100000,
      gasPrice: 8000000000
    }
  }
};