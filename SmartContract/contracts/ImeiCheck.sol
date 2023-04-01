//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

// import "hardhat/console.sol";

contract ImeiCheck {

    struct Device {
        string brand;
        string model;
        uint imeiNumber;
        bytes32 encryptedSeedPhrase;
        bool verified;
        uint activationTimestamp;
    }

    address[] authorizedWalletIds;
    mapping(uint => Device) devices;

    constructor(address[] memory _authorizedWalletIds) {
        authorizedWalletIds = _authorizedWalletIds;
    }

    modifier onlyAuthorized {
        bool callerIsAuthorized = false;
        for (uint i = 0; i < authorizedWalletIds.length; i++) {
            if (msg.sender == authorizedWalletIds[i]) {
                callerIsAuthorized = true;
                break;
            }
        }
        require(callerIsAuthorized, "Only authorized wallets can add devices");
        _;
    }

    function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) public onlyAuthorized {
        devices[_imeiNumber] = Device(_brand, _model, _imeiNumber, _encryptedSeedPhrase, false, 0);
    }

    function verifyDevice(uint _imeiNumber, bytes32 _seedPhrase) public returns (bool success, string memory brand, string memory model) {
        Device storage device = devices[_imeiNumber];
        require(!device.verified, "Device has already been verified");
        if (keccak256(abi.encodePacked(_seedPhrase)) == device.encryptedSeedPhrase) {
            device.verified = true;
            device.activationTimestamp = block.timestamp;
            (success, brand, model) = (true, device.brand, device.model);
        } else {
            (success, brand, model) = (false, "", "");
        }
    }

    function getDeviceActivationTimestamp(uint _imeiNumber) public view returns (uint activationTimestamp) {
        return devices[_imeiNumber].activationTimestamp;
    }
}
