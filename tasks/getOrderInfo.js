//The address eneed to be changed

const addressContract = "0x10A0242484b49cB595782615F18D58bD318FA635";

task("getOrderInfo", "plot order's information")
    .addParam("id", "order's id")
    .setAction(async (taskArgs) => {
        const wrpt = await ethers.getContractAt("Wrapped_Token", addressContract);
        let owner = await wrpt.ownerOf(taskArgs.id);
        let info = await wrpt.getOrderInfo(taskArgs.id);
        
        let result = {
            owner: owner,
            ledger: info[0],
            amount: info[1]
        }

        console.log("owner: " + result['owner']);
        
        console.log("ledger: " + result['ledger']);
        
        console.log("amount: " + result['amount']);
})