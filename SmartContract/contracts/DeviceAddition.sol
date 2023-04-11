pragma solidity ^0.8.0;

contract DeviceAddition{
    
    struct Device {
        string brand;
        string model;
        uint imeiNumber;
        bytes32 encryptedSeedPhrase;
    }
    
    bytes32 [] public devices;
    
    function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) public {
        string memory concatenated = string(abi.encodePacked(_brand, _model, _imeiNumber, _encryptedSeedPhrase));
        bytes32 hashed = keccak256(abi.encodePacked(concatenated));
        devices.push(hashed);
    }
    
    function getDevices() public view returns(bytes32[] memory) {
        return devices;
    }
}
