import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Confirm.css";

const ConfirmBooking = ({ location }) => {
  const navigate = useNavigate();

  const [booking, setBooking] = useState();

  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(booking));
    }
  }, []);

  if (!booking) {
    return <p>No booking data available.</p>;
  }

  return (
    <>
      <div className="container m-5 p-5 text-center">
        <h1>Thank you for your reservation!</h1>
        <h3 className="lead-txt">
          We look forward to seeing you at Little Lemon.
        </h3>
        <div>
          <h2>Confirmation Details</h2>
          <p>Name: {booking.name || "Not provided"}</p>
          <p>Email: {booking.email || "Not provided"}</p>
          <p>Date: {booking.date || "Not provided"}</p>
          <p>Time: {booking.time || "Not provided"}</p>
          <p>Number of Guests: {booking.guests || "Not provided"}</p>
          <p>Occasion: {booking.occasion || "Not provided"}</p>
          <p>Special Request: {booking.special || "Not provided"}</p>
        </div>

        <div>
          <button
            onClick={() => navigate("/")}
            className="btn cancel-btn rounded-3"
          >
            Back to home
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmBooking;
