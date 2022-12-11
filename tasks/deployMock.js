
task("deployMock", "Deploy an ERC20 Factory", async () => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const ERC20Factory = await ethers.getContractFactory("ERC20Factory");
    const erc20Factory = await ERC20Factory.deploy();
  
    console.log("ERC20Factory's address is ", erc20Factory.address);  
  })
  