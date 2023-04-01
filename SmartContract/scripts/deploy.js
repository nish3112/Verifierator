// const { ethers } = require("ethers");

// const main = async () =>  {

//   const ImeiCheck = await hre.ethers.getContractFactory('ImeiCheck');
//   const imeicheck = await ImeiCheck.deploy();

//   await ImeiCheck.deployed();

//   console.log("Transactions deployed to : ", imeicheck.address)
// }


// const runMain = async() => {
//   try{
//       await main();
//       process.exit(0);
//   }catch(error){
//     console.error(error);
//     process.exit(1);
//   }
// }


// runMain();
// require("@nomiclabs/hardhat-ethers");


// const main = async () =>  {


//   const ImeiCheck = await hre.ethers.getContractFactory('ImeiCheck');
//   const Imeicheck = await ImeiCheck.deploy();
//   await imeicheck.deployed();

//   console.log("Transaction deployed to:", imeicheck.address);
// }

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }

// runMain();

const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const authorizedWalletIds = ["0xC346eA0fD7007269e62Ba79eac3bd448e4f3b4d2"]; // replace with actual wallet addresses

  const ImeiCheck = await hre.ethers.getContractFactory("ImeiCheck");
  const imeiCheck = await ImeiCheck.deploy(authorizedWalletIds);

  await imeiCheck.deployed();

  console.log("Contract deployed to:", imeiCheck.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
