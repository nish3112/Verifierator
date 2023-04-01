// require("@nomicfoundation/hardhat-ether");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks : {
    sepolia :{
      url : 'https://eth-sepolia.g.alchemy.com/v2/4DK660TdG4swTJFVNgTZUQUWSBvpbPVn',
      accounts : ['a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225']
    }
  }
};
