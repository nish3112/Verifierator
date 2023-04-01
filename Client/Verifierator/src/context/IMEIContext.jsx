import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import { contractABI, contractAddress } from '../utils/constant';

export const IMEIContext =React.createContext();

const {ethereum} = window;

window.ethereum

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);

    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);

    console.log({provider,signer,transactionContract});
}


export const IMEIProvider = ({children}) => {
    return(
        <IMEIContext.Provider value ={{value: 'test'}}>
            {children}
        </IMEIContext.Provider>
    )
}