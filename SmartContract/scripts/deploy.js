const main = async () =>  {

  const ImeiCheck = await hre.ethers.getContractFactory("ImeiCheck");
  const imeicheck = await ImeiCheck.deploy();

  await ImeiCheck.deployed();

  console.log("Transactions deployed to : ", imeicheck.address)
}


const runMain = async() => {
  try{
      await main();
      process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}


runMain();
