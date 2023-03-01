import React from "react";

const FooterNavigation = ()=>{
    return(
        <>
        <div>
            <img></img>
        </div>
        <div>
            <h2>Doormat Navigation</h2>
            <nav>
                <ul >
                   <li><img></img> </li>
                    <li><a  href = "#HOME">HOME</a></li>
                    <li><a  href = "#ABOUT">ABOUT</a></li>
                    <li><a  href = "#MENU">MENU</a></li>
                    <li><a  href = "#RESERVATION">RESERVATION</a></li>
                    <li><a  href = "#OL-ORDER">ORDER ONLINE</a></li>
                    <li><a  href = "#LOCATION">LOCATION</a></li>
                    <li><a  href = "#LOGIN">LOGIN</a></li>
                </ul>
            </nav>
        </div>
        <div className="contact">
            <h2>Contact</h2>
            <nav>
                <ul >
                   <li><img></img> </li>
                    <li><a  href = "#address">address</a></li>
                    <li><a  href = "#phone-number">phone number</a></li>
                    <li><a  href = "#email">email</a></li>
                </ul>
            </nav>
        </div>
        <div className="social-media">
            <h2>Social Media Links</h2>
            <nav>
                <ul >
                   <li><img></img> </li>
                    <li><a  href = "#address">address</a></li>
                    <li><a  href = "#phone-number">phone number</a></li>
                    <li><a  href = "#email">email</a></li>
                </ul>
            </nav>
        </div>
        </>
    );
}


export default FooterNavigation;