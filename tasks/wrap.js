//The address eneed to be changed

const addressContract = "0x10A0242484b49cB595782615F18D58bD318FA635";

task("wrap", "wrap in a NFT an amount of token to sell")
    .addParam("ledger", "ledger to aim.")
    .addParam("amount", "amount to collateralize.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let tx = await wrpt.connect(signers[0]).wrap(taskArgs.ledger, taskArgs.amount.toString());
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        console.log("Token's address is " + tx.transactionHash );
})