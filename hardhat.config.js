/** @type import('hardhat/config').HardhatUserConfig */

//require("@nomicfoundation/hardhat-toolbox");
require("./tasks/approve");
require("./tasks/createToken");
require("./tasks/deployMock");
require("./tasks/deployWRPT");
require("./tasks/getBalance");
require("./tasks/getOrderInfo");
require("./tasks/getTokens");
require("./tasks/totalOrders");
require("./tasks/transfer");
require("./tasks/unwrap");
require("./tasks/wrap");

module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      id:7555,
      url: "http://127.0.0.1:7545",
      accounts: ['d12b5992a5efca452c0b1a12179c06da09644c88e4d50b8e1a7c6992199670fb']
    }
  }
};
