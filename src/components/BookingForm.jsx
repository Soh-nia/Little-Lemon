import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";

const BookingForm = ({ availableTimes, updateTimes, submitAPI }) => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
    special: "",
    formCheck: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (bookingData.date) {
      updateTimes(bookingData.date);
    }
  }, [bookingData.date, updateTimes]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBookingData({ ...bookingData, [id]: value });

    if (id === "date") {
      updateTimes(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Reservation data submitted:", bookingData);
    try {
      const success = await submitAPI(bookingData);

      if (success) {
        localStorage.setItem("Bookings", JSON.stringify(bookingData));
        navigate("/confirm-booking", { state: { bookingData } });
      } else {
        console.error("Error submitting the form data");
      }
    } catch (error) {
      console.error("Error submitting the form data:", error);
    }
  };

  return (
    <>
      <div className="container m-5 p-5">
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          <div className="col-6 form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={bookingData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter Name"
            />
            <div className="invalid-feedback">
              Please provide us with your name.
            </div>
          </div>

          <div className="col-6 form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="email"
              value={bookingData.email}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Please provide your email.</div>
          </div>

          <div className="col-6 form-group">
            <label htmlFor="date" className="form-label">
              Choose date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={bookingData.date}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Please pick a date.</div>
          </div>

          <div className="col-6 form-group">
            <label htmlFor="time" className="form-label">
              Choose time
            </label>
            <select
              id="time"
              className="form-control"
              value={bookingData.time}
              onChange={handleInputChange}
              required
            >
              {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
                availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))
              ) : (
                <option value="">No available times</option>
              )}
            </select>
            <div className="invalid-feedback">Please select a valid time.</div>
          </div>

          <div className="col-6 form-group">
            <label htmlFor="guests" className="form-label">
              Number of guests
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={bookingData.guests}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Please enter number of guests.
            </div>
          </div>

          <div className="col-6 form-group">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select
              id="occasion"
              className="form-control"
              value={bookingData.occasion}
              onChange={handleInputChange}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <div className="invalid-feedback">Please select occasion.</div>
          </div>

          <div className="col-12 form-group">
            <label htmlFor="special" className="form-label">
              Special Request
            </label>
            <textarea
              className="form-control"
              placeholder="Enter special request"
              id="special"
              data-height="150"
              value={bookingData.special}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={bookingData.formCheck}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    formCheck: e.target.checked,
                  })
                }
                id="formCheck"
                required
              />
              <label className="form-check-label" htmlFor="formCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-6">
            <button className="btn primary-btn rounded-3" type="submit">
              Make Your reservation
            </button>
          </div>
          <div className="col-6">
            <Link to="/" className="btn cancel-btn rounded-3">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
