import React, { useState } from "react";
import { HeartIcon, HeartfillIcon } from "../../utils/svgImages";
import "./ProductsContainer.css";

const ProductsContainer = () => {
  const [heartStates, setHeartStates] = useState(Array(10).fill(false));

  const toggleHeart = (index) => {
    const newHeartStates = [...heartStates];
    newHeartStates[index] = !newHeartStates[index];
    setHeartStates(newHeartStates);
  };

  return (
    <div className="products-body">
      {[...Array(10)].map((_, index) => (
        <div className="product-container" key={index}>
          <img
            src={heartStates[index] ? HeartfillIcon : HeartIcon}
            alt="heart icon"
            className="heart-icon"
            onClick={() => toggleHeart(index)}
          />
          <img
            alt="model"
            className="model-img"
            src="https://img.freepik.com/free-photo/charming-girl-stands-street_8353-5373.jpg?t=st=1715516439~exp=1715520039~hmac=8e7bf4740b55b897d2ea20c566d588cf181d86ae749f721f7007dfd658fbab44&w=360"
          />
          <span>Round neck cotton Tee</span>
          <span>Rs. 599</span>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
