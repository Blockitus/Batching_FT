//The address eneed to be changed
const addressFactory = "0x57C2F563e52949D45e0F984E74643b6bA5132D60";

task("getTokens", "return all tokens deployed")
    .setAction(async (taskArgs) => {
        //const signers = await ethers.getSigners();
        const erc20Factory = await ethers.getContractAt("ERC20Factory", addressFactory);
        let res = await erc20Factory.getTokens();
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        console.log("Tokens deployed " + res.length);
        console.log("Tokens deployed " + res)
})