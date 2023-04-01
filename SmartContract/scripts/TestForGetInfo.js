

const contractABI = [
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
        }
      ],
      "name": "isVerified",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
const Web3 = require("web3");
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/4DK660TdG4swTJFVNgTZUQUWSBvpbPVn"); // Replace with your own provider URL
const myContract = new web3.eth.Contract(contractABI, contractAddress);

async function isVerified(imeiNumber) {
  try {
    const result = await myContract.methods.isVerified(imeiNumber).call();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Example usage:
const imeiNumber = 1234567890123456; // Insert your IMEI number here
isVerified(imeiNumber)
  .then(result => console.log(result))
  .catch(error => console.error(error));
