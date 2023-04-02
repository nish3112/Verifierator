// // DeviceAddition deployed to: 0x223070D541cF3884BdDb097334f794026D717aE0
// // SecondaryContract deployed to: 0x5267aEEd17B16F3172a193E806974BeC29ca3082

const Web3 = require("web3");
const fs = require("fs");
const web3 = new Web3("https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY");

// const deviceAdditionABI = JSON.parse(fs.readFileSync("artifacts/contracts/DeviceAddition.sol/DeviceAddition.json")).abi;

// const contractAddress = "0x223070D541cF3884BdDb097334f794026D717aE0"; 
// const privateKey = "a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225";


// const DeviceAddition= new web3.eth.Contract(deviceAdditionABI, contractAddress);

// const brand = "Apple";
// const model = "iPhone 12";
// const imeiNumber = 31122002;
// const encryptedSeedPhrase = web3.utils.asciiToHex("nishith");

// const functionAbi = DeviceAddition.methods.addDevice(brand, model, imeiNumber, encryptedSeedPhrase);
// const bytes32Array = DeviceAddition.methods.getDevices();


// console.log(functionAbi);
// console.log('-------------------------------------------------------');
// console.log(bytes32Array);
// web3.eth.accounts.signTransaction(
//     {
//       to: contractAddress,
//       data: functionAbi,
//       gas: 2000000,
//     },
//     privateKey
//   )
//   .then((signedTx) => {
//     web3.eth.sendSignedTransaction(signedTx.rawTransaction)
//       .on("receipt", console.log);
//   });


const ethers = require('ethers');

// Set up the contract ABI and address
const contractABI =  JSON.parse(fs.readFileSync("artifacts/contracts/DeviceAddition.sol/DeviceAddition.json")).abi;
const contractAddress = '0x223070D541cF3884BdDb097334f794026D717aE0'; 

// Set up the provider and signer
const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY');
const privateKey = 'a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225';
const signer = new ethers.Wallet(privateKey, provider);

// Create the contract instance
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Add a new device
async function addDevice(brand, model, imeiNumber, encryptedSeedPhrase) {
  const tx = await contract.addDevice(brand, model, imeiNumber, encryptedSeedPhrase);
  await tx.wait();
  console.log('Device added:', brand, model, imeiNumber, encryptedSeedPhrase);
}

// Get all devices
async function getDevices() {
  const devices = await contract.getDevices();
  console.log('Devices:', devices);
}

// Call the functions

addDevice('Apple', 'iPhone 14', 1234567898779, web3.utils.keccak256("Hello"));
getDevices();
