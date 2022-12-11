//The address eneed to be changed
const addressFactoryAlchemy = "0xbB5d4Ae5a22DCef8C1075E99FB98A9325A87D208";
const addressFactory = "0xe887Cc58f7ac048736190Dda840D3A446f3b90f7";

task("getTokens", "return all tokens deployed")
    .setAction(async (taskArgs) => {
        //const signers = await ethers.getSigners();
        const erc20Factory = await ethers.getContractAt("ERC20Factory", addressFactory);
        let res = await erc20Factory.getTokens();
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        console.log("Tokens deployed " + res.length);
        console.log("Tokens deployed " + res)
})