const Web3 = require('web3');
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

const contractAddress = "0x5e78c056919c124353f7346e8a57f80b4e7ebdad"; // Replace with the address of the deployed contract 
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-sepolia.g.alchemy.com/v2/4DK660TdG4swTJFVNgTZUQUWSBvpbPVn')); // Change the URL to your own node URL
const contract = new web3.eth.Contract(abi, contractAddress);

const imeiNumber = 1234567890123456; // Replace with the IMEI number of the device you want to verify
const seedPhrase = web3.utils.asciiToHex("test message"); // Replace with the seed phrase of the device you want to verify

// contract.methods.verifyDevice(imeiNumber, web3.utils.keccak256(seedPhrase)).send({ from: '0xC346eA0fD7007269e62Ba79eac3bd448e4f3b4d2' /* Replace with your own address */, gas: 3000000 })
//     .then((result) => {
//         console.log(result);
//         // Do something with the result of the function call
//     })
//     .catch((error) => {
//         console.error(error);
//         // Handle the error
//     });

// const Web3 = require('web3');
// const abi = [...]; // ABI of your contract
// const contractAddress = '0x5e78c056919c124353f7346e8a57f80b4e7ebdad'; // Address of your contract on the blockchain
// const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/4DK660TdG4swTJFVNgTZUQUWSBvpbPVn'); // URL of your node
// const contract = new web3.eth.Contract(abi, contractAddress);

// const imeiNumber = 1234567890123456; // Replace with the IMEI number of the device you want to verify
// const seedPhrase = web3.utils.asciiToHex('test message'); // Replace with the seed phrase of the device you want to verify

contract.methods.verifyDevice(imeiNumber, web3.utils.keccak256(seedPhrase)).call()
  .then((result) => {
    console.log(result);
    // Do something with the result of the function call
  })
  .catch((error) => {
    console.error(error);
    // Handle the error
  });

