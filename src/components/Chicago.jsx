import React from "react";
import "../styles/Chicago.css";

const Chicago = () => {
  return (
    <>
      <div className="container p-5 my-5">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="chi-h1">Little Lemon</h1>
            <h4 className="chi-h4">Chicago</h4>
            <p className="chi-p">
              Welcome to <span className="owners">Little Lemon 🍋</span>, where culinary excellence
              meets a warm and inviting ambiance. Nestled in the heart of
              Chicago, our restaurant is your go-to destination for delightful
              dining experiences. At Little Lemon, we're not just a restaurant;
              we're a destination for food enthusiasts, business professionals,
              and everyone in between. Come, be a part of our culinary journey.
              <br></br>
              <span className="owners text-end justify-content-end">Mario & Adrian</span>
            </p>
          </div>
          <div className="col-sm-6">
            <div className="main-parent">
              <img src="assets/about3.png" alt="about" className="about1 rounded-2 shadow" />
              <img src="assets/about1.png" alt="about" className="about2 rounded-2 shadow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chicago;
