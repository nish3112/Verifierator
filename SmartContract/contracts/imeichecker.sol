//SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract DeviceVerification {
    
    // Struct to store device information
    struct Device {
        string brand;
        string model;
        uint imeiNumber;
        bytes32 encryptedSeedPhrase;
        bool activated;
    }
    
    // Mapping to store device information
    mapping (uint => Device) public devices;
    
    // Mapping to store authorized wallet IDs
    mapping (address => bool) public authorizedWallets;
    
    // Constructor to add authorized wallet IDs
    constructor() {
        authorizedWallets[msg.sender] = true;
    }
    
    // Modifier to restrict access to authorized wallet IDs only
    modifier onlyAuthorized() {
        require(authorizedWallets[msg.sender], "Only authorized wallets can access this function");
        _;
    }
    
    // Function to add device information to the blockchain
    function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) public onlyAuthorized {
        devices[_imeiNumber] = Device(_brand, _model, _imeiNumber, _encryptedSeedPhrase, false);
    }
    
    // Function to verify and activate a device
    function verifyAndActivate(uint _imeiNumber, bytes memory _seedPhrase) public returns (bool) {
        Device storage deviceToActivate = devices[_imeiNumber];
        if (keccak256(_seedPhrase) == deviceToActivate.encryptedSeedPhrase) {
            // Seed phrase matches, activate the device and update device details
            deviceToActivate.activated = true;
            return true;
        } else {
            // Seed phrase does not match, do not activate the device
            return false;
        }
    }
    
    // Function to update device information (only for authorized wallet IDs)
    function updateDevice(uint _imeiNumber, string memory _brand, string memory _model, bytes32 _encryptedSeedPhrase) public onlyAuthorized {
        devices[_imeiNumber] = Device(_brand, _model, _imeiNumber, _encryptedSeedPhrase, devices[_imeiNumber].activated);
    }
    
    // Function to revoke access for a specific wallet ID (only for authorized wallet IDs)
    function revokeAccess(address _walletId) public onlyAuthorized {
        authorizedWallets[_walletId] = false;
    }
}
