// SecondaryContract deployed to: 0x5267aEEd17B16F3172a193E806974BeC29ca3082

const Web3 = require("web3");
const fs = require("fs");
const web3 = new Web3(
  "https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY"
);


const deviceAdditionAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_deviceAdditionContractAddress",
        "type": "address"
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
    "inputs": [],
    "name": "getDevices",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// const contract = "0x5267aEEd17B16F3172a193E806974BeC29ca3082";

// Render by id
const brand = "Samsung";
const model = "Galaxy";
const imeiNumber = 2345234523452345;
const encryptedSeedPhrase = web3.utils.keccak256("Hello");

async function Activate(brand, model, imeiNumber, encryptedSeedPhrase) {
  const concatenated = brand + model + imeiNumber + encryptedSeedPhrase;
  const hashed = web3.utils.keccak256(concatenated);
  console.log(hashed);
  console.log("----------------");

  return hashed;
}

async function getDevices(secondaryContract) {
  const devices = await secondaryContract.methods.getDevices().call();
  console.log("Devices:", devices);
  return devices;
}

const secondaryContractAddress = "0x5267aEEd17B16F3172a193E806974BeC29ca3082";
const deviceAdditionContract = new web3.eth.Contract(deviceAdditionAbi, secondaryContractAddress);
const all_devices = await getDevices(deviceAdditionContract);
const hashed_val = await Activate(brand, model, imeiNumber, encryptedSeedPhrase);

function containsValue(all_devices, hashed_val) {
  return all_devices.includes(hashed_val);
}

// (async function () {
//   const decision = await containsValue(all_devices, hashed_val);

//   if (decision == true) {
//     // Send the eth transaction on chain 2
//     deviceAdditionContract.methodsif (decision == true) {
//       try {
//         // Wait for the decision variable
//         await Promise.resolve(decision);
    
//         // Send the eth transaction on chain 2
//         const tx = await secondaryContract.methods
//           .addDevice(brand, model, imeiNumber, encryptedSeedPhrase)
//           .send({ from: "0x...", gas: 100000 });
    
//         console.log("Transaction hash:", tx.transactionHash);
//         console.log("Transaction receipt:", tx);
//       } catch (error) {
//         console.error("Error sending transaction:", error);
//       }
  // }else {
  //     // Show failed symbol
  //   }
    
  // }
