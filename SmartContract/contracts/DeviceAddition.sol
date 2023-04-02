
// pragma solidity ^0.8.18;

// // import "hardhat/console.sol";

// contract DeviceAddition {

    
//     struct Device {
//         string brand;
//         string model;
//         uint imeiNumber;
//         bytes32 encryptedSeedPhrase;
//         bool verified;
//     }

//     address[] authorizedWalletIds;
//     mapping(address => Device) internal deviceMap;
//     // mapping(address => Device) deviceMap;
//     mapping(bytes32 => bool) verifiedHashes;

//     //SPDX-License-Identifier: MIT


    


//     constructor(address[] memory _authorizedWalletIds) {
//         authorizedWalletIds = _authorizedWalletIds;
//     }

//     modifier onlyAuthorized {
//         bool callerIsAuthorized = false;
//         for (uint i = 0; i < authorizedWalletIds.length; i++) {
//             if (msg.sender == authorizedWalletIds[i]) {
//                 callerIsAuthorized = true;
//                 break;
//             }
//         }
//         require(callerIsAuthorized, "Only authorized wallets can add devices");
//         _;
//     }

//     function addDevice(string memory _brand, string memory _model, uint _imeiNumber, bytes32 _encryptedSeedPhrase) public onlyAuthorized {
//         address userAddress = msg.sender;
//         deviceMap[userAddress] = Device(_brand, _model, _imeiNumber, _encryptedSeedPhrase, false);
//     }

//     function getDevice() public view returns (string memory, string memory, uint, bytes32, bool) {
//         address userAddress = msg.sender;
//         Device memory device = deviceMap[userAddress];
//         return (device.brand, device.model, device.imeiNumber, device.encryptedSeedPhrase, device.verified);
//     }


//      function getDevice(address _userAddress) public view returns (string memory, string memory, uint, bytes32, bool) {
//         Device memory device = deviceMap[_userAddress];
//         return (device.brand, device.model, device.imeiNumber, device.encryptedSeedPhrase, device.verified);
//     }
// }


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
