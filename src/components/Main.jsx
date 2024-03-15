import React, { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import Login from "./pages/Login";
import ConfirmBooking from "./ConfirmBooking";
import { fetchAPI, submitAPI } from "../api";

export const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // No need for initializeTimes function here
    default:
      return state;
  }
};
export const initializeTimes = (date) => {
  return fetchAPI(date);
};

const Main = () => {
  // useEffect(() => {
  //   initializeTimes(new Date())
  //     .then((times) => dispatch({ type: "UPDATE_TIMES", payload: times }))
  //     .catch((error) =>
  //       console.error("Error updating available times:", error)
  //     );
  // }, []);

  useEffect(() => {
    updateTimes(new Date()); // Fetch available times when component mounts
  }, []);

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  const updateTimes = (selectedDate) => {
    const times = fetchAPI(selectedDate); // Fetch available times
    dispatch({ type: "UPDATE_TIMES", payload: times }); // Update available times
  };

  // const updateTimes = (selectedDate) => {
  //   initializeTimes(selectedDate)
  //     .then((times) => dispatch({ type: "UPDATE_TIMES", payload: times }))
  //     .catch((error) =>
  //       console.error("Error updating available times:", error)
  //     );
  // };

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route
        path="/reserve"
        element={
          <Reservation
            availableTimes={availableTimes}
            updateTimes={updateTimes}
            submitAPI={submitAPI}
          />
        }
      ></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/confirm-booking" element={<ConfirmBooking />} />
    </Routes>
  );
};

export default Main;
