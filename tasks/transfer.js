//The address eneed to be changed
const addressToken = "0xe887Cc58f7ac048736190Dda840D3A446f3b90f7";

task("transfer", "transfer from {from} to {to} an amount.")
    .addParam("tp", "spender allowed to spend an amount of tokens.")
    .addParam("amount", "quantity of tokens abele to spend by the spender.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const erc20 = await ethers.getContractAt("MockERC20", addressToken);
        let tx = await erc20.connect(signers[0]).transfer(taskArgs.spender, taskArgs.amount.toString());
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        let receipt = await tx.wait();
        console.log("Token's address is " + receipt);
})