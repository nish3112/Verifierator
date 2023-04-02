# Verifierator

Mobile Device Activation on Ethereum Blockchain
This project is a decentralized mobile device activation platform that allows users to verify the authenticity of a mobile device before purchasing. The platform utilizes the immutability of blockchain to securely store the device's IMEI number and encrypted seed phrase, which can be used by the purchaser to activate the device.

The system consists of two smart contracts deployed on the Ethereum blockchain. The first contract is the Primary Contract, which is responsible for storing the device information, including the brand, model, IMEI number, and encrypted seed phrase. This contract is owned and controlled by the manufacturer, who adds the device information to the contract at the time of manufacturing.

The second contract is the Secondary Contract, which allows users to activate the device using the seed phrase provided with the device. The Secondary Contract interacts with the Primary Contract to verify the authenticity of the device by checking if the IMEI number and seed phrase match the information stored on the blockchain.

The system provides an additional layer of security by allowing users to check if a device has been previously used. Since the transactions on the blockchain are immutable, they cannot be tampered with, providing a safe environment for users to purchase devices without fear of purchasing a stolen or cloned device.

To use the system, the user inputs the seed phrase provided with the device into the activation interface. The Secondary Contract then verifies the authenticity of the device by checking if the IMEI number and seed phrase match the information stored on the blockchain. If the information matches, the device is activated, and the user can start using it.

#Installation
To install and use the system, you need to have an Ethereum wallet and some Ether/Matic to cover the transaction fees. You can then deploy the Primary Contract and the Secondary Contract on the Ethereum blockchain.

#Usage
To use the system, follow these steps:

1.Purchase a mobile device with a seed phrase provided by the manufacturer.
2.Input the seed phrase into the activation interface.
3.Wait for the activation to complete.
4.Start using the device.


Contributions
Contributors:
1. Nishith Thakker
2. Vidhan Tamhankar
3. Hetvi Shah
4. Riddhi Gandhi 


