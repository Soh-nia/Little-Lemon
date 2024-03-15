import React from "react";
import "../styles/Special.css";
import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

const Specials = () => {
  return (
    <>
      <div className="container my-5 px-5">
        <div className="row my-3">
          <div className="col">
            <div className="text-start">
              <h2 className="special-heading">
                This Week <span>Special's!</span>
              </h2>
            </div>
          </div>
          <div className="col">
            <div className="text-end">
              <div>
                <Link to="/order" className="btn primary-btn rounded-3">
                  Order Menu
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 rounded-4 shadow">
              <img
                src="assets/greek salad.jpg"
                className="card-img-top img-fluid"
                alt="greek-salad"
              />
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="text-start">
                      <h5 className="card-text card-h5">Greek Salad</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-end">
                      <p className="card-text card-p1">$12.99</p>
                    </div>
                  </div>
                </div>
                <p className="card-text card-p2">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <div className="align-item-center d-flex delivery justify-content-center rounded-5">
                  <Link to="/order" className="delivery-link">
                    <p className="card-text card-p3">Order Delivery <MdDeliveryDining className="delivery-icon mx-2" /></p>                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-4 shadow">
              <img
                src="assets/bruschetta.jpg"
                className="card-img-top img-fluid"
                alt="bruschetta"
              />
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="text-start">
                      <h5 className="card-text card-h5">Bruschetta</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-end">
                      <p className="card-text card-p1">$5.99</p>
                    </div>
                  </div>
                </div>
                <p className="card-text card-p2">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <div className="align-item-center d-flex delivery justify-content-center rounded-5">
                  <Link to="/order" className="delivery-link">
                    <p className="card-text card-p3">Order Delivery <MdDeliveryDining className="delivery-icon mx-2" /></p>                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-4 shadow">
              <img
                src="assets/lemon dessert.jpg"
                className="card-img-top img-fluid"
                alt="lemon-dessert"
              />
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="text-start">
                      <h5 className="card-text card-h5">Lemon Dessert</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-end">
                      <p className="card-text card-p1">$5.00</p>
                    </div>
                  </div>
                </div>
                <p className="card-text card-p2">
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <div className="align-item-center d-flex delivery justify-content-center rounded-5">
                  <Link to="/order" className="delivery-link">
                    <p className="card-text card-p3">Order Delivery <MdDeliveryDining className="delivery-icon mx-2" /></p>                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specials;
