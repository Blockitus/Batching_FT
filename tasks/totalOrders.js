//The address eneed to be changed

const addressContract = "0x10A0242484b49cB595782615F18D58bD318FA635";

task("totalOrders", "plot all orders listed at moment.")
    .setAction(async (taskArgs) => {
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let result = await wrpt.totalOrders();
        //let token_address = await erc20Factory.decodeFunctionResult("createToken", tx.data);
        console.log("Total of orders " + result);
})