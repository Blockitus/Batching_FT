//The address eneed to be changed
const addressFactory = "0x57C2F563e52949D45e0F984E74643b6bA5132D60";

task("createToken", "create a new token to test")
    .addParam("name", "token's name.")
    .addParam("symbol", "token's symbol.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const erc20Factory = await ethers.getContractAt("ERC20Factory", addressFactory);
        let tx = await erc20Factory.connect(signers[0]).createToken(taskArgs.name, taskArgs.symbol);
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        console.log("Token's address is " + tx);
})