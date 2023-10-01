// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Utils {
    function compareStrings(
        string memory a,
        string memory b
    ) public pure returns (bool) {
        bytes memory aBytes = bytes(a);
        bytes memory bBytes = bytes(b);
        if (aBytes.length != bBytes.length) {
            return false;
        }
        for (uint i = 0; i < aBytes.length; i++) {
            if (aBytes[i] != bBytes[i]) {
                return false;
            }
        }
        return true;
    }
}
