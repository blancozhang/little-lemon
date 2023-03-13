import React from "react";

const BookingForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle form submission here
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit} className = "form">
      <label htmlFor="customerName">Name:</label>
      <input type="string" id="customerName" />
      <label htmlFor="phone">Phone Number:</label>
      <input type="string" id="phone" />
      <label htmlFor="email">Email:</label>
      <input type="string" id="email" />
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>None</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" className="submit"/>
    </form>
  );
};

export default BookingForm;