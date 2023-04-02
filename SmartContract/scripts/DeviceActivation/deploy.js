const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const contractcreatorId = ["0xC346eA0fD7007269e62Ba79eac3bd448e4f3b4d2"]; // replace with actual wallet addresses

  const DeviceActivationAndVerification = await hre.ethers.getContractFactory("DeviceActivationAndVerification");
  const deviceActivationAndVerification = await DeviceActivationAndVerification.deploy();

  await deviceActivationAndVerification.deployed();

  console.log("Contract deployed to:", deviceActivationAndVerification.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });