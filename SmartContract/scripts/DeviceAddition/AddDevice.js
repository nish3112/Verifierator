// // DeviceAddition deployed to: 0x223070D541cF3884BdDb097334f794026D717aE0
// // SecondaryContract deployed to: 0x5267aEEd17B16F3172a193E806974BeC29ca3082

const Web3 = require("web3");
const fs = require("fs");
const web3 = new Web3("https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY");
const ethers = require('ethers');
const contractABI =  JSON.parse(fs.readFileSync("artifacts/contracts/DeviceAddition.sol/DeviceAddition.json")).abi;
const contractAddress = '0x223070D541cF3884BdDb097334f794026D717aE0';
const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY');
const privateKey = 'a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225';
const signer = new ethers.Wallet(privateKey, provider); 
const brand = 'Xaomi';
const model = 'Same';
const imei = 1381375817;
const encryptedSeedPhrase = web3.utils.keccak256("Hello");



// Create the contract instance
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Add a new device
async function addDevice(brand, model, imeiNumber, encryptedSeedPhrase) {

  // Initialize the DeviceAddition contract
  // const deviceAdditionContract = new ethers.Contract(contract, contractABI, signer);
  const deviceAdditionContract = contract.connect(signer);
  const tx = await deviceAdditionContract.addDevice(brand, model, imeiNumber, encryptedSeedPhrase);
  await tx.wait();
  // Log the transaction hash to the console
  console.log("Transaction hash:", tx.hash);
  console.log('Device added:', brand, model, imeiNumber, encryptedSeedPhrase);
}

// Get all devices
async function getDevices() {
  const devices = await contract.getDevices();
  console.log('Devices:', devices);
}




addDevice(brand,model,imei,encryptedSeedPhrase);
getDevices();
