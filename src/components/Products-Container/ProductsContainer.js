import React, { useState } from "react";
import { HeartIcon, HeartfillIcon } from "../../utils/svgImages";
import "./ProductsContainer.css";

const ProductsContainer = ({ products }) => {
  const [heartStates, setHeartStates] = useState(Array(10).fill(false));

  const toggleHeart = (index) => {
    const newHeartStates = [...heartStates];
    newHeartStates[index] = !newHeartStates[index];
    setHeartStates(newHeartStates);
  };
  console.log(products);
  return (
    <div className="products-body">
      {products.map((product, index) => (
        <div className="product-container" key={product.id}>
          <img
            src={heartStates[index] ? HeartfillIcon : HeartIcon}
            alt="heart icon"
            className="heart-icon"
            onClick={() => toggleHeart(index)}
          />
          <img alt="model" className="model-img" src={product.image} />
          <div className="viewProducts">
            <span className="text-viewProducts">View Product</span>
          </div>
          <span>{product.name}</span>
          <div className="price-data">
             <span>Rs {+product.price + 230}</span>
             <span>Rs {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
