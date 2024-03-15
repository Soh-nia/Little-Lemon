import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import "../styles/Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="container p-5 my-5">
        <h2 className="t-h2 align-item-center text-center">Testimonial</h2>
        <div className="my-3 py-4">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-100 rounded-4 shadow">
                <div className="card-body text-center align-item-center justify-content-center">
                  <div className="d-flex text-center align-item-center justify-content-center">
                    <div className="d-flex rounded-circle img-container align-item-center">
                      <img
                        src="assets/customer1.png"
                        alt="customer"
                        className="img-fluid rounded-circle customer"
                      />
                    </div>
                  </div>
                  <h4 className="card-text t-card-h5">Alex C.</h4>
                  <div className="rating d-flex align-item-center justify-content-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <p className="card-text t-card-p2">
                    Little Lemon is my go-to spot for business meetings. The
                    cozy atmosphere and delicious menu make it the perfect
                    setting. Highly recommend!
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 rounded-4 shadow">
                <div className="card-body text-center align-item-center justify-content-center">
                  <div className="d-flex text-center align-item-center justify-content-center">
                    <div className="d-flex rounded-circle img-container align-item-center">
                      <img
                        src="assets/customer3.png"
                        alt="customer"
                        className="img-fluid rounded-circle customer"
                      />
                    </div>
                  </div>
                  <h4 className="card-text t-card-h5">Sarah M.</h4>
                  <div className="rating d-flex align-item-center justify-content-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                  <p className="card-text t-card-p2">
                    Absolutely love Little Lemon! The flavors are mind-blowing,
                    and the online reservation makes life so easy. A hidden gem
                    in the city!
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 rounded-4 shadow">
                <div className="card-body text-center align-item-center justify-content-center">
                  <div className="d-flex text-center align-item-center justify-content-center">
                    <div className="d-flex rounded-circle img-container align-item-center">
                      <img
                        src="assets/customer2.png"
                        alt="customer"
                        className="img-fluid rounded-circle customer"
                      />
                    </div>
                  </div>
                  <h4 className="card-text t-card-h5">Emily L.</h4>
                  <div className="rating d-flex align-item-center justify-content-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <p className="card-text t-card-p2">
                    Little Lemon exceeded my expectations! The food is
                    top-notch, and the ambiance is charming. Loved every moment.
                    Thanks for a fantastic dining experience!
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 rounded-4 shadow">
                <div className="card-body text-center align-item-center justify-content-center">
                  <div className="d-flex text-center align-item-center justify-content-center">
                    <div className="d-flex rounded-circle img-container align-item-center">
                      <img
                        src="assets/customer4.png"
                        alt="customer"
                        className="img-fluid rounded-circle customer"
                      />
                    </div>
                  </div>
                  <h4 className="card-text t-card-h5">Javier R.</h4>
                  <div className="rating d-flex align-item-center justify-content-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </div>
                  <p className="card-text t-card-p2">
                    Visited Little Lemon with friends, and it was a delight! The
                    online reservation was a breeze, and the staff made us feel
                    right at home. Can't wait to be back!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
