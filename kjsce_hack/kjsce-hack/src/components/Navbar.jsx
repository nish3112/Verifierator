import { useState } from "react";
import {logo} from "../assets";

function Navbar() {
  const [active, setActive] = useState("Home");
 
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[135px] h-[90px]" />
      <span style={{ color: "white", fontSize: "22px" }}>erifierator</span>
      <div className="nav-right">
        <div className="nav-list">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1" style={{
            display: 'flex', gap: '4rem',
            color: 'rgb(255, 255, 255)'
          }}>
            <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/">Home</a></li>
            <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/register">Register Device</a></li>
            <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/check">Check device</a></li>
            <li className="font-poppins font-normal cursor-pointer text-[16px]"><a href="/admin">Admin</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
