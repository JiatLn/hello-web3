// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint counts;

    constructor() {
        counts = 0;
    }

    function add() public {
        counts += 1;
    }

    function getCounts() public view returns (uint) {
        return counts;
    }
}
