// pragma solidity ^0.8.18;

// interface IDeviceAddition {
// function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) external;
// function getDevice() external view returns (string memory, string memory, uint, bytes32, bool);
// function getDevice(address _userAddress) external view returns (string memory, string memory, uint, bytes32, bool);
// }

// contract SecondaryContract {
//     address public deviceAdditionAddress;
//     IDeviceAddition public deviceAddition;

// constructor(address _deviceAdditionAddress) {
//     deviceAdditionAddress = _deviceAdditionAddress;
//     deviceAddition = IDeviceAddition(_deviceAdditionAddress);
// }

// function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) external {
//     deviceAddition.addDevice(_brand, _model, _imeiNumber, _encryptedSeedPhrase);
// }

// function getDevice() public view returns (string memory, string memory, uint, bytes32, bool) {
//     return deviceAddition.getDevice();
// }

// function getDevice(address _userAddress) public view returns (string memory, string memory, uint, bytes32, bool) {
//     return deviceAddition.getDevice(_userAddress);
// }
// }




pragma solidity ^0.8.0;

interface IDeviceAddition {
    function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) external;
    function getDevices() external view returns(bytes32[] memory);
}

contract SecondaryContract {
    IDeviceAddition deviceAdditionContract;
    
    constructor(address _deviceAdditionContractAddress) {
        deviceAdditionContract = IDeviceAddition(_deviceAdditionContractAddress);
    }
    
    function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) public {
        deviceAdditionContract.addDevice(_brand, _model, _imeiNumber, _encryptedSeedPhrase);
    }
    
    function getDevices() public view returns(bytes32[] memory) {
        return deviceAdditionContract.getDevices();
    }
}
