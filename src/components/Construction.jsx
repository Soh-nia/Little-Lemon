import React from 'react';
import { IoConstruct } from "react-icons/io5";
import "../styles/Construction.css";


const Construction = () => {
  return (
    <>
      <div className="container my-5">
        <div className="const-container justify-content-center align-item-center text-center">
          <div className="const-icon">
          <IoConstruct />
          </div>
          <div className="const-text text-center">
            <p>Page Under Construction</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Construction;
