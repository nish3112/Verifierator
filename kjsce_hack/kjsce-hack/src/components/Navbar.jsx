import { useState } from "react";
import {logo} from "../assets";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      
      
      <img src={logo} alt="hoobank" className="w-[135px] h-[90px]" />
  
      <span style={{color:"white",fontSize:"22px"}}>erifierator</span>
      <div className="nav-right">
        <div className="nav-list">
        <ul className="list-none sm:flex hidden justify-end items-center flex-1"  style={{display:'flex',gap:'4rem',
              color:'rgb(255, 255, 255)'}}>
                    <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/" >Home</a></li>
                    <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/register" >Register Device</a></li>
                    <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/check" >Check device</a></li>
                    <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/admin" >Admin</a></li>

      </ul>
      </div>
      <button className="nav-button">Connect to wallet</button>
      </div>
     

    </nav>
  );
};

export default Navbar;
