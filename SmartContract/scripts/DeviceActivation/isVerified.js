//0x6d1dbefEee6576E26328C40E5422Bd30682F9D07 --> This is open contract where activation of device can take place



const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/your-project-id');
const deviceActivationContractAddress = '0x3256d990EcbCcb12699B0F7d8eaD029A0536074E';
const transactionContractAddress = '0x6d1dbefEee6576E26328C40E5422Bd30682F9D07';
const deviceActivationContractABI = [ /* Contract ABI here */ ];
const transactionContractABI = [ /* Contract ABI here */ ];

// Replace these inputs with actual device data
const brand = 'ExampleBrand';
const model = 'ExampleModel';
const imeiNumber = 123456789012345;
const encryptedSeedPhrase = '0x1234567890123456789012345678901234567890123456789012345678901234';
const verified = false;

// Concatenate all inputs into a single string and hash it to generate a 32-byte key
const inputString = brand + model + imeiNumber + encryptedSeedPhrase + verified;
const key = web3.utils.keccak256(inputString);

// Create a contract instance for device activation contract
const deviceActivationContract = new web3.eth.Contract(deviceActivationContractABI, deviceActivationContractAddress);

// Call the activateDevice function of device activation contract
deviceActivationContract.methods.activateDevice(brand, model, imeiNumber, encryptedSeedPhrase).send({ from: 'your-wallet-address' })
  .then((receipt) => {
    // If transaction is successful, check if key exists in any input messages of the transaction
    const transactionHash = receipt.transactionHash;
    web3.eth.getTransaction(transactionHash, (err, tx) => {
      if (err) {
        console.error(err);
        return;
      }
      for (const input of tx.input.match(/.{1,64}/g)) {
        if (input === key) {
          console.log('Hit found!');
          // Create a contract instance for transaction contract
          const transactionContract = new web3.eth.Contract(transactionContractABI, transactionContractAddress);
          // Call the createTransaction function of transaction contract
          transactionContract.methods.createTransaction().send({ from: 'your-wallet-address' })
            .then(console.log)
            .catch(console.error);
          break;
        }
      }
    });
  })
  .catch(console.error);
