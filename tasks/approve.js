//The address eneed to be changed
const addressToken = "0x2FdcA21634ca50E2e4ad84d1989D63046FC08A72";

task("approve", "approve from {owner} to {operator} to spent some token amount")
    .addParam("spender", "spender allowed to spend an amount of tokens.")
    .addParam("amount", "quantity of tokens abele to spend by the spender.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const erc20 = await ethers.getContractAt("MockERC20", addressToken);
        let tx = await erc20.connect(signers[0]).approve(taskArgs.spender, taskArgs.amount.toString());
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        let receipt = await tx.wait();
        console.log("Token's address is " + receipt);
})