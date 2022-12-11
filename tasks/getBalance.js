
task("getBalance", "return the balance of an user")
    .addParam("token", "set a ledger to know your balance")
    .addParam("user", "set an user's address to know its balance")
    .setAction(async (taskArgs) => {
        //const signers = await ethers.getSigners();
        //const erc20Factory = await ethers.getContractAt("ERC20Factory", addressFactory);
        const erc20 = await ethers.getContractAt("MockERC20", taskArgs.token);
        let res = await erc20.balanceOf(taskArgs.user);
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        console.log("Tokens deployed " + res);
})