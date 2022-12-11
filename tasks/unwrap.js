//The address eneed to be changed

const addressContract = "";

task("unwrap", "unwrapp a NFT to claim the collateralized amount in token.")
    .addParam("id", "offer to delete.")
    .setAction(async (taskArgs) => {
        const signers = await ethers.getSigners();
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let tx = await wrpt.connect(signers[0]).unwrapp(taskArgs.id);
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        
        let receipt = await tx.wait();
        console.log("Token's address is " + receipt.hash);
})