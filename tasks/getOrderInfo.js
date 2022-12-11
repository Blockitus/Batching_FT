//The address eneed to be changed

const addressContract = "";

task("getOrderInfo", "plot order's information")
    .addParam("id", "order's id")
    .setAction(async (taskArgs) => {
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let owner = await wrpt.ownerOf(taskArgs.id);
        let info = await wrpt.getOrderInfo(id);
        
        let result = {
            owner: owner,
            ledger: info[0],
            amount: info[1]
        }

        console.log("Token's address is " + result);
})