// // Takes imei and seed phrase and activates the device
// const Web3 = require("web3");
// // const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/4DK660TdG4swTJFVNgTZUQUWSBvpbPVn");
// const hre = require("hardhat");

// async function main() {
//   const [deployer] = await hre.ethers.getSigners();
//   console.log("Deploying contract with the account:", deployer.address);

//   const imei = 1234567890123456;
//   const seedPhrase = web3.utils.asciiToHex("test message 001");

// //   const ImeiCheckUpdated = await hre.ethers.getContractFactory("ImeiCheckUpdated");
//   const imeiCheckUpdated = await ImeiCheckUpdated.attach("0x649f6C73c8526fd6B00B065Cd36057C7aCaa9b4a");

//   const verified = await imeiCheckUpdated.verifyDevice(imei, web3.utils.keccak256(seedPhrase));

//   if (verified[0]) {
//     console.log(`Device verified! Brand: ${verified[1]}, Model: ${verified[2]}`);
//     const activationTimestamp = await imeiCheckUpdated.getDeviceActivationTimestamp(imei);
//     console.log(`Activation timestamp: ${activationTimestamp}`);
//   } else {
//     console.log("Device verification failed");

//   }
// }

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });


// Takes imei and seed phrase and activates the device
const Web3 = require("web3");
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/4DK660TdG4swTJFVNgTZUQUWSBvpbPVn");
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
//   console.log("Deploying contract with the account:", deployer.address);

  const imei = 1234567890123457;
  const seedPhrase = "test test test test test";

  const imeiCheckUpdated = await hre.ethers.getContractAt("ImeiCheckUpdated", "0x649f6C73c8526fd6B00B065Cd36057C7aCaa9b4a");

  const verified = await imeiCheckUpdated.verifyDevice(imei, web3.utils.keccak256(seedPhrase));

  if (verified[0]) {
    console.log(`Device verified! Brand: ${verified[1]}, Model: ${verified[2]}`);
    const activationTimestamp = await imeiCheckUpdated.getDeviceActivationTimestamp(imei);
    console.log(`Activation timestamp: ${activationTimestamp}`);
  } else {
    console.log(verified);
    console.log("Device verification failed");
  }


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
