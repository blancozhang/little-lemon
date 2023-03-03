import React from "react";
import logo from "../Little-Lemon-logos/Asset_16@4x.png";

const Navigation = () =>{
    return(
        <header className="nav-top">
        
        <nav>
            <ul >
                <li><img src={logo}  alt="little lemon logo" className="logo-top"/></li>
                <li><a  href = "#HOME">HOME</a></li>
                <li><a  href = "#ABOUT">ABOUT</a></li>
                <li><a  href = "#MENU">MENU</a></li>
                <li><a  href = "#RESERVATION">RESERVATION</a></li>
                <li><a  href = "#OL-ORDER">ORDER ONLINE</a></li>
                <li><a  href = "#LOCATION">LOCATION</a></li>
                <li><a  href = "#LOGIN">LOGIN</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Navigation;