
// DeviceAddition deployed to: 0x223070D541cF3884BdDb097334f794026D717aE0
// SecondaryContract deployed to: 0x5267aEEd17B16F3172a193E806974BeC29ca3082

const { ethers } = require("ethers");
const fs = require("fs");

// Load the DeviceAddition contract ABI and bytecode
const deviceAdditionABI = JSON.parse(fs.readFileSync("artifacts/contracts/DeviceAddition.sol/DeviceAddition.json")).abi;
const deviceAdditionBytecode = JSON.parse(fs.readFileSync("artifacts/contracts/DeviceAddition.sol/DeviceAddition.json")).bytecode;

// Load the SecondaryContract contract ABI and bytecode
const secondaryContractABI = JSON.parse(fs.readFileSync("artifacts/contracts/SecondaryContract.sol/SecondaryContract.json")).abi;
const secondaryContractBytecode = JSON.parse(fs.readFileSync("artifacts/contracts/SecondaryContract.sol/SecondaryContract.json")).bytecode;

// Initialize an Ethereum provider
const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY");

// Initialize an Ethereum wallet using the private key
const privateKey = "a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225";
const wallet = new ethers.Wallet(privateKey, provider);

// Deploy the DeviceAddition contract
async function deployDeviceAddition() {
  const DeviceAddition = new ethers.ContractFactory(deviceAdditionABI, deviceAdditionBytecode, wallet);
  const deviceAddition = await DeviceAddition.deploy();
  console.log("DeviceAddition deployed to:", deviceAddition.address);
}

// Deploy the SecondaryContract contract
async function deploySecondaryContract() {
  // First, deploy the DeviceAddition contract
  const DeviceAddition = new ethers.ContractFactory(deviceAdditionABI, deviceAdditionBytecode, wallet);
  const deviceAddition = await DeviceAddition.deploy();
  console.log("DeviceAddition deployed to:", deviceAddition.address);

  // Then, deploy the SecondaryContract contract
  const SecondaryContract = new ethers.ContractFactory(secondaryContractABI, secondaryContractBytecode, wallet);
  const secondaryContract = await SecondaryContract.deploy(deviceAddition.address);
  console.log("SecondaryContract deployed to:", secondaryContract.address);
}

deploySecondaryContract();
