import React from 'react';
import BookingForm from '../BookingForm';

const Reservation = ({ availableTimes, updateTimes, submitAPI }) => {
  return (
    <div className='container-fluid'>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitAPI={submitAPI}  />
    </div>
  );
}

export default Reservation;
