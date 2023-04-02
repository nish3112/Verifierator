import React from "react";

const Wallet=() =>{
    const connectWallet = async() => {
        if(typeof window!='undefined' && typeof window.ethereum!='undefined'){
          try{
          const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
          console.log(accounts[0]);
          var text = document.getElementById("getval");
          var val = '..';
          if(accounts[0]!=0){
            text.innerHTML = accounts[0].slice(0,2)+val+accounts[0].slice(-2);
          } 
        } catch(err){
          console.error(err.message);
        }
      } else{
        console.log("Please install MetaMask");
      }
      }
    return(
        <div>
            <button className="nav-bttn" id="getval"  onClick={connectWallet}>Connect to Wallet</button>
        </div>
    );
}

export default Wallet;