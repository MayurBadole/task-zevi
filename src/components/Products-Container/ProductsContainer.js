import React, { useState } from "react";
import { HeartIcon, HeartfillIcon } from "../../utils/svgImages";
import "./ProductsContainer.css";

const ProductsContainer = ({ products }) => {
  const [heartStates, setHeartStates] = useState(
    Array(products.length).fill(false)
  );

  const toggleHeart = (index) => {
    const newHeartStates = [...heartStates];
    newHeartStates[index] = !newHeartStates[index];
    setHeartStates(newHeartStates);
  };
  return (
    <>
      {products.length === 0 && (
        <span className="NoDataFound">No Data Found</span>
      )}
      <div className="products-body">
        {products.length !== 0 &&
          products.map((product, index) => (
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
              <span className="products-name">{product.name}</span>
              <div className="price-data">
                <span className="cross-price">Rs {+product.price + 230}</span>
                <span>Rs {product.price}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductsContainer;
