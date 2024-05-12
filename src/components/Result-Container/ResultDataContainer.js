import { zeviIcon } from "../../utils/svgImages";
import Filters from "../Filters/Filters";
import ProductsContainer from "../Products-Container/ProductsContainer";
import "./ResultDataContainer.css";

const ResultDataContainer = ({ products }) => {
  return (
    <>
      <img src={zeviIcon} alt="zevi logo " className="zevi-icon" />

      <div className="body-container">
        <Filters />
        <ProductsContainer products={products} />
      </div>
    </>
  );
};

export default ResultDataContainer;
