//The address eneed to be changed

const addressContract = "";

task("totalOrders", "plot all orders listed at moment.")
    .setAction(async (taskArgs) => {
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let result = await wrpt.totalOrders();
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        console.log("Token's address is " + result);
})