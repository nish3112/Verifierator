//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./DeviceAddition.sol";


interface DeviceAdditionInterface {
    function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) external;
    function getDevice(address _userAddress) external view returns (string memory, string memory, uint, bytes32, bool);
}

contract DeviceActivationAndVerification {
    DeviceAdditionInterface private deviceAdditionContract;

    constructor(DeviceAdditionInterface _deviceAdditionContractAddress) {
        deviceAdditionContract = _deviceAdditionContractAddress;
    }

    function activateDevice(
        string memory _brand,
        string memory _model,
        uint _imeiNumber,
        bytes32 _seedPhrase
    ) public {
        deviceAdditionContract.addDevice(
            _brand,
            _model,
            _imeiNumber,
            _seedPhrase
        );
    }

    function isVerified(uint _imeiNumber) public view returns (bool) {
        address userAddress = msg.sender;
        (
            string memory brand,
            string memory model,
            uint imei,
            bytes32 seed,
            bool verified
        ) = deviceAdditionContract.getDevice(userAddress);
        if (imei == _imeiNumber && verified) {
            return true;
        } else {
            return false;
        }
    }
}
