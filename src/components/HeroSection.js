import React from "react";
import HeroImage from "../images/restauranfood.jpg";

const HeroSection= () =>{
    return(
        <div className="hero">
        <div >
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button>Reserva a Table</button>
        </div>
        
            <img src={HeroImage}  className = "hero-img" />
        
        </div>
    );
}

export default HeroSection;