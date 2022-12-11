
task("deployWRPT", "Deploy WRPT", async () => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const WRPT = await ethers.getContractFactory("Wrapped_Token");
    const wrpt = await WRPT.deploy();
  
    console.log("WRPT's address is ", wrpt.address);  
  
})
  