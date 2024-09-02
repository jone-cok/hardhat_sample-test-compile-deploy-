// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Token
 * @dev Implements voting process along with vote delegation
 */

import "hardhat/console.sol";

contract Token {
    string public name = "My hardhat token";
    string public symbol = "MHT";

    uint256 public totalSupply = 100000;

    address public owner;

    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address _to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");

        console.log("tranfer from %s to %s %s token", msg.sender, _to, amount);
        balances[msg.sender] -= amount;
        balances[_to] += amount;

        emit Transfer(msg.sender, _to, amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
