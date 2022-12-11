//The address eneed to be changed
const addressToken = "0xA41e9D8396cAa271114C3F153E869d87a43F6b64";

task("approve", "approve from {owner} to {operator} to spent some token amount")
    .addParam("spender", "spender allowed to spend an amount of tokens.")
    .addParam("amount", "quantity of tokens abele to spend by the spender.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const erc20 = await ethers.getContractAt("MockERC20", addressToken);
        let tx = await erc20.connect(signers[0]).approve(taskArgs.spender, taskArgs.amount.toString());
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        let receipt = await tx.wait();
        console.log("transacton hash is " + receipt.transactionHash);
})