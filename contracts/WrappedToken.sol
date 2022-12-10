// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Wrapped_Token is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private tokenId;

    IERC20 ierc20;
    
    struct Order {
        address ledger;
        uint256 amount;
    }

    //all orders list of 


    mapping (uint256 => Order) private _orders;
    
    mapping (address => uint256[]) private _ids;

    mapping (uint256 => uint256) private _index;

    event Wrapped(address indexed from, address indexed token, uint256 id, uint256 amount);
    event Unwrapped(address indexed from, address indexed token, uint256 id);

    constructor() ERC721("WRAPPED_TOKEN", "WRPT"){}
    
    //this functiOn collateralized the NFT 
    function wrapp(address _ledger, uint256 _amount) public {
        ierc20 = IERC20(_ledger);
        require(ierc20.balanceOf(msg.sender) <= _amount, "WRPT: You do not have funds enough.");
        ierc20.transferFrom(msg.sender, address(this), _amount);
        Order memory order = Order(_ledger, _amount);
        tokenId.increment();
        
        _orders[tokenId.current()] = order;
        _ids[msg.sender].push(tokenId.current());
        _index[tokenId.current()] = _ids[msg.sender].length - 1;

        _mint(msg.sender, tokenId.current());
        emit Wrapped(address(0), _ledger, tokenId.current(), _amount);
    }

    function unwrapp(uint256 id) public {
        Order memory order;
        order = _orders[id];
        ierc20 = IERC20(order.ledger);
        require(msg.sender == ownerOf(id), "WRPT: You are not the owner of NFT");
        ierc20.transfer(msg.sender, order.amount);
        _burn(id);
        emit Unwrapped(msg.sender, order.ledger, id);
    }

    function ordersOf(address user) external view returns(uint256[] memory) {
        return _ids[user];
    }

    function getIndex(uint256 id) external view  returns (uint256) {
        return _index[id];
    }

    function getOrder(uint256 id) external view returns ( Order memory) {
        return _orders[id];
    }

}