// //0x6d1dbefEee6576E26328C40E5422Bd30682F9D07 --> This is open contract where activation of device can take place


// const contractABI = [
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_brand",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_model",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_imeiNumber",
//           "type": "uint256"
//         },
//         {
//           "internalType": "bytes32",
//           "name": "_seedPhrase",
//           "type": "bytes32"
//         }
//       ],
//       "name": "activateDevice",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_imeiNumber",
//           "type": "uint256"
//         }
//       ],
//       "name": "isVerified",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ];
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
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "getDevice",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
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
      "inputs": [],
      "name": "getDevice",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

// const Web3 = require('web3');
// const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY');
// const deviceActivationContractAddress = '0x3256d990EcbCcb12699B0F7d8eaD029A0536074E';
// const transactionContractAddress = '0x6d1dbefEee6576E26328C40E5422Bd30682F9D07';
// // Replace these inputs with actual device data
// const brand = 'Apple';
// const model = 'Iphone 12';
// const imeiNumber = 31122002;
// const encryptedSeedPhrase = web3.utils.asciiToHex("nishith");
// const verified = false;

// // Concatenate all inputs into a single string and hash it to generate a 32-byte key
// const inputString = brand + model + imeiNumber + encryptedSeedPhrase + verified;
// const key = web3.utils.keccak256(inputString);

// // Create a contract instance for device activation contract
// const deviceActivationContract = new web3.eth.Contract(deviceActivationContractABI, deviceActivationContractAddress);

// // Call the activateDevice function of device activation contract
// const gasLimit = 300000; // set a good amount of gas to fund the transaction
// deviceActivationContract.methods.activateDevice(brand, model, imeiNumber, encryptedSeedPhrase).estimateGas({ from: '0xC346eA0fD7007269e62Ba79eac3bd448e4f3b4d2', gasLimit })
//   .then((gas) => {
//     deviceActivationContract.methods.activateDevice(brand, model, imeiNumber, encryptedSeedPhrase).encodeABI();
//     const txData = deviceActivationContract.methods.activateDevice(brand, model, imeiNumber, encryptedSeedPhrase).encodeABI();
//     web3.eth.accounts.signTransaction({
//       to: deviceActivationContractAddress,
//       data: txData,
//       gas,
//       gasLimit // include the gas limit in the signed transaction
//     }, 'a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225')
//       .then((signedTx) => {
//         web3.eth.sendSignedTransaction(signedTx.rawTransaction)
//           .then((receipt) => {
//             // If transaction is successful, check if key exists in any input messages of the transaction
//             const transactionHash = receipt.transactionHash;
//             web3.eth.getTransaction(transactionHash, (err, tx) => {
//               if (err) {
//                 console.error(err);
//                 return;
//               }
//               for (const input of tx.input.match(/.{1,64}/g)) {
//                 if (input === key) {
//                   console.log('Hit found!');
//                   // Create a contract instance for transaction contract
//                   const transactionContract = new web3.eth.Contract(transactionContractABI, transactionContractAddress);
//                   // Call the createTransaction function of transaction contract
//                   transactionContract.methods.createTransaction().send({ from: '0xC346eA0fD7007269e62Ba79eac3bd448e4f3b4d2' })
//                     .then(console.log)
//                     .catch(console.error);
//                   break;
//                 }
//               }
//             });
//           })
//           .catch(console.error);
//       })
//       .catch(console.error);
//   })
//   .catch(console.error);

const Web3 = require('web3');

// Connect to the local blockchain
const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY');

// Define the contract ABI and address

const contractAddress = "0x3256d990EcbCcb12699B0F7d8eaD029A0536074E";

// Create a contract instance
const myContract = new web3.eth.Contract(contractABI, contractAddress);

// Define the data to search for
const searchValue = "0x8c6ea279000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000001dae2526e6973686974680000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054170706c6500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000094970686f6e652031320000000000000000000000000000000000000000000000";

// Call the smart contract function to get the transaction ID for the matching contract
myContract.methods.getContractTxnId(searchValue).call()
  .then(function(txnId){
    console.log("Transaction ID: ", txnId);
  });
