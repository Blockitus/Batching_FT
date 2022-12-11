//The address eneed to be changed
const addressFactoryAlchemy = "0xbB5d4Ae5a22DCef8C1075E99FB98A9325A87D208";
const addressFactory = "0xe887Cc58f7ac048736190Dda840D3A446f3b90f7";

task("createToken", "create a new token to test")
    .addParam("name", "token's name.")
    .addParam("symbol", "token's symbol.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const erc20Factory = await ethers.getContractAt("ERC20Factory", addressFactory);
        let tx = await erc20Factory.connect(signers[0]).createToken(taskArgs.name, taskArgs.symbol);
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        let receipt = await tx.wait();
        console.log("Token's address is " + receipt.to);
})