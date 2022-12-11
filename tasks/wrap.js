//The address eneed to be changed

const addressContract = "";

task("wrap", "wrap in a NFT an amount of token to sell")
    .addParam("ledger", "ledger to aim.")
    .addParam("amount", "amount to collateralize.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let tx = await wrpt.connect(signers[0]).wrapp(taskArgs.ledger, taskArgs.amount);
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        let receipt = await tx.wait();
        console.log("Token's address is " + receipt.hash);
})