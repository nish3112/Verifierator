
const Web3 = require("web3");
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/4DK660TdG4swTJFVNgTZUQUWSBvpbPVn"); // Replace with your own provider URL

const abi = [
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_authorizedWalletIds",
        "type": "address[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_brand",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_model",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_imeiNumber",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_encryptedSeedPhrase",
        "type": "bytes32"
      }
    ],
    "name": "addDevice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_imeiNumber",
        "type": "uint256"
      }
    ],
    "name": "getDeviceActivationTimestamp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "activationTimestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_imeiNumber",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_seedPhrase",
        "type": "bytes32"
      }
    ],
    "name": "verifyDevice",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "brand",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "model",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const contractAddress = "0x649f6C73c8526fd6B00B065Cd36057C7aCaa9b4a"; // Replace with the address of the deployed contract
const privateKey = "a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225"; // Replace with your own private key

const ImeiCheckContract = new web3.eth.Contract(abi, contractAddress);

const brand = "Apple";
const model = "iPhone 100";
const imeiNumber = 1234567890123456;
const encryptedSeedPhrase = web3.utils.asciiToHex("test test test test test"); // Replace with your own encrypted seed phrase

const functionAbi = ImeiCheckContract.methods.addDevice(brand, model, imeiNumber, encryptedSeedPhrase).encodeABI();

web3.eth.accounts.signTransaction(
    {
      to: contractAddress,
      data: functionAbi,
      gas: 2000000,
    },
    privateKey
  )
  .then((signedTx) => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      .on("receipt", console.log);
  });
