//The address eneed to be changed

const addressContract = "0x10A0242484b49cB595782615F18D58bD318FA635";

task("unwrap", "unwrapp a NFT to claim the collateralized amount in token.")
    .addParam("id", "offer to delete.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let tx = await wrpt.connect(signers[0]).unwrap(taskArgs.id);
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        let receipt = await tx.wait();
        console.log("Token's address is " + receipt.transactionHash);
})