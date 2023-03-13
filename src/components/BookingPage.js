import React from "react";
import BookingForm from "./BookingForm.js";
import LeftImage from "../images/restaurant.jpg";
import RightImage from "../images/restaurant _chef_B.jpg";
import "../style/BookingForm.css"

const BookingPage = () =>{
    return (
        <div className="booking-main">
            <img src= {LeftImage} alt = "left" className="booking-img" / >
            <BookingForm />
            <img src= {RightImage} alt = "left" className="booking-img" / >
        </div>
    );
}

export default BookingPage;