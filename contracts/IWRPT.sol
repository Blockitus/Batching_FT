// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface IWRPT {

    struct Order {
        address ledger;
        uint256 amount;
    }

    event Wrapped(address indexed from, address indexed token, uint256 id, uint256 amount);
    event Unwrapped(address indexed from, address indexed token, uint256 id);

    function wrap(address _ledger, uint256 _amount) external;
    function unwrap(uint256 id) external; 

    function getOrderInfo(uint256 id) external view returns(Order memory);
    function totalOrderBy(address user) external view returns (uint256);
    function getOrderIndex(address user, uint256 id) external view  returns (uint256);
    function getOrderIdByIndex(uint256 index) external view returns (uint256);
    function totalOrders() external view returns(uint256);


}