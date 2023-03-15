import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle form submission here
  };

  const validateInputs = () => {
    let isValid = true;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim().length === 0) {
      alert("Please enter your name");
      isValid = false;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number");
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      isValid = false;
    }

    if (date === "") {
      alert("Please choose a date");
      isValid = false;
    }

    if (time === "") {
      alert("Please choose a time");
      isValid = false;
    }

    if (guests < 1 || guests > 10) {
      alert("Please enter a number of guests between 1 and 10");
      isValid = false;
    }

    return isValid;
  };

  const handleFormSubmit = (event) => {
  event.preventDefault();
  if (validateInputs()) {
    alert("Thank you for your reservation!");
    // Add code to handle form submission here
  }
};

return (
  <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleFormSubmit} className="form">
    <label htmlFor="customerName">Name:</label>
    <input type="string" id="customerName" value={name} onChange={(e) => setName(e.target.value)} />
    <label htmlFor="phone">Phone Number:</label>
    <input type="string" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
    <label htmlFor="email">Email:</label>
    <input type="string" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
      <option value="">--Please choose a time--</option>
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00">19:00</option>
      <option value="20:00">20:00</option>
      <option value="21:00">21:00</option>
      <option value="22:00">22:00</option>
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
      <option value="None">None</option>
      <option value="Birthday">Birthday</option>
      <option value="Anniversary">Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation" className="submit"/>
  </form>
);
};

export default BookingForm;