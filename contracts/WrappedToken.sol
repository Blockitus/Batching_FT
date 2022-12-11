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

    //all orders list 
    uint256[] private _orders;

    mapping (uint256 => Order) private _idLinkedToOrder;
    
    mapping (address => uint256) private _quantity;

    mapping (address => mapping (uint256 => uint256)) private _myOrders;

    event Wrapped(address indexed from, address indexed token, uint256 id, uint256 amount);
    event Unwrapped(address indexed from, address indexed token, uint256 id);

    constructor() ERC721("WRAPPED_TOKEN", "WRPT"){}
    
    //this functiOn collateralized the NFT 
    function wrap(address _ledger, uint256 _amount) public virtual {
        ierc20 = IERC20(_ledger);
        require(ierc20.balanceOf(msg.sender) >= _amount, "WRPT: You do not have funds enough.");
        assert(ierc20.transferFrom(msg.sender, address(this), _amount));
        
        Order memory order = Order(_ledger, _amount);
        tokenId.increment();
        uint256 id = tokenId.current();
        
        _orders.push(id);
        _idLinkedToOrder[id] = order;
        _quantity[msg.sender] += 1;
        _myOrders[msg.sender][id] = _orders.length - 1;

        _mint(msg.sender, tokenId.current());
        emit Wrapped(msg.sender, _ledger, tokenId.current(), _amount);
    }

    function unwrap(uint256 id) public virtual {
        require(msg.sender == ownerOf(id), "WRPT: You are not the owner of NFT");
        Order memory order = _idLinkedToOrder[id];
        ierc20 = IERC20(order.ledger);
        
        uint256 index = _myOrders[msg.sender][id];
        _popIndexTarget(index, _orders);
        _quantity[msg.sender] -= 1;
        delete _idLinkedToOrder[id];
        delete _myOrders[msg.sender][id];
        _burn(id);
        
        assert(ierc20.transfer(msg.sender, order.amount));
        emit Unwrapped(msg.sender, order.ledger, id);
    }

    function getOrderInfo(uint256 id) external view returns(Order memory) {
        return _idLinkedToOrder[id];
    }

    function  totalOrderBy(address user) external view returns (uint256) {
        return _quantity[user];
    }

    function getOrderIndex(address user, uint256 id) external view  returns (uint256) {
        return _myOrders[user][id];
    }

    function getOrderIdByIndex(uint256 index) external view returns (uint256) {
        return _orders[index];
    }

    function totalOrders() external view returns(uint256) {
        return _orders.length;
    }

    function _popIndexTarget(uint256 indexTarget, uint256[] storage _list) internal {
        uint256 lastIndex = _list.length - 1;
        _list[indexTarget] = _list[lastIndex];
        _list.pop();
    }

}