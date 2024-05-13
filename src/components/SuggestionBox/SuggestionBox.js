import { useEffect, useState } from "react";
import "./SuggestionBox.css";
import useFakeProducts from "../../useFakeProducts";
import { useNavigate } from "react-router-dom";

const SuggestionBox = () => {
  const navigate = useNavigate();

  const [randomProducts, setRandomProducts] = useState([]);

  const products = useFakeProducts(8);
  useEffect(() => {
    setRandomProducts(products);
  }, [products]);
  const handleResult = () => {
    navigate("/results");
  };
  return (
    <div className="suggestion-box-container">
      <div className="suggestion-list">
        <span className="suggestion-title">Latest Trends</span>
        <div className="row-property">
          {randomProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="suggestion-model"
              onClick={() => handleResult()}
            >
              <img
                src={product.image}
                alt={product.name}
                className="model-image"
              />
              <span className="suggestion-name">{product.name}</span>
            </div>
          ))}
        </div>
        <span className="suggestion-title">Popular suggestions</span>
        <div className="suggestion-items">
          {randomProducts.slice(4).map((product) => (
            <div key={product.id} onClick={() => handleResult()}>
              <span className="suggestion-name">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;
