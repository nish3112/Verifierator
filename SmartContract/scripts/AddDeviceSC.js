async function addDevice() {
    const web3 = require('web3');
    // Initialize an Ethereum provider
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/syrLp3KESw4-OSB6MBmFPAh9Pi0Xs7TY");
  
    // Initialize an Ethereum wallet using the private key
    const wallet = new ethers.Wallet("a8e3761a4f4201cd5e528844781d8488841cc796c055c3509d4d6f9cb7bbb225", provider);
  
    // Load the DeviceAddition contract ABI and address
    const deviceAdditionABI = JSON.parse(fs.readFileSync("artifacts/contracts/DeviceAddition.sol/DeviceAddition.json")).abi;
    const deviceAdditionAddress = "0x223070D541cF3884BdDb097334f794026D717aE0";
  
    // Initialize the DeviceAddition contract
    const deviceAdditionContract = new ethers.Contract(deviceAdditionAddress, deviceAdditionABI, wallet);
  
    // Call the addDevice function
    const tx = await deviceAdditionContract.addDevice("Apple", "iPhone 12", 1234567890, web3.utils.asciiToHex("HelloWorld"));
  
    // Log the transaction hash to the console
    console.log("Transaction hash:", tx.hash);
  }

addDevice();
  