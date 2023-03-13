import React from "react";
import logo from "../Little-Lemon-logos/Asset_16@4x.png";
import { Link } from "react-router-dom";
import "../style/Navigation.css"

const Navigation = () =>{
    return(
        <header className="nav-top">
        
        <nav>
            <ul >
                <li><img src={logo}  alt="little lemon logo" className="logo-top"/></li>
                <li><Link  to = "/">HOME</Link></li>
                <li><Link  to = "#ABOUT">ABOUT</Link></li>
                <li><Link  to = "#MENU">MENU</Link></li>
                <li><Link  to = "/bookingPage">RESERVATION</Link></li>
                <li><Link  to = "#OL-ORDER">ORDER ONLINE</Link></li>
                <li><Link  to = "#LOCATION">LOCATION</Link></li>
                <li><Link  to = "#LOGIN">LOGIN</Link></li>
            </ul>
        </nav>
        </header>
    );
}

export default Navigation;