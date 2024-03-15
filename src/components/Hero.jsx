import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container-fluid p-5">
          <div className="row mx-3">
            <div className="col-sm-7">
              <h1>Little Lemon</h1>
              <h4>Chicago</h4>
              <p className="hero-p">
                <span>🍋 Savor the Flavors, Embrace the Atmosphere</span>
                <br />
                At Little Lemon, we're not just a restaurant; we're a
                destination for food enthusiasts, business professionals, and
                everyone in between. Come, be a part of our culinary journey.
                <br />
                <span>Little Lemon</span> – Where Every Bite is a Delight! 🍋
              </p>
              <div>
                <Link to="/reserve" className="btn primary-btn rounded-3">
                  Reserve a Table
                </Link>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="my-3">
                <img
                  src="assets/restauranfood.jpg"
                  alt="hero-img"
                  className="img-fluid rounded-3 hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
