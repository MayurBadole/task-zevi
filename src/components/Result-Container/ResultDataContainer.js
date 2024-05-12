import Filters from "../Filters/Filters";
import ProductsContainer from "../Products-Container/ProductsContainer";
import "./ResultDataContainer.css";

const ResultDataContainer = () => {
  return (
    <div className="body-container">
      <Filters />
      <ProductsContainer />
    </div>
  );
};

export default ResultDataContainer;
