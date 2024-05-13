import { useState, useEffect } from "react";
import { zeviIcon } from "../../utils/svgImages";
import Filters from "../Filters/Filters";
import ProductsContainer from "../Products-Container/ProductsContainer";
import "./ResultDataContainer.css";

const ResultDataContainer = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  console.log(selectedRatings, "selectedRatings");
  useEffect(() => {
    // Filter products based on selected brands, price ranges, and ratings
    const filtered = products.filter((product) => {
      const passesBrandFilter =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const passesPriceFilter =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.some((range) => {
          const [min, max] = range.split(" - ").map(parseFloat);
          const price = parseFloat(product.price);
          return price >= min && price <= max;
        });
      const passesRatingFilter =
        selectedRatings.length === 0 ||
        selectedRatings.includes(product.rating.toString());
      return passesBrandFilter && passesPriceFilter && passesRatingFilter;
    });

    setFilteredProducts(filtered);
  }, [products, selectedBrands, selectedPriceRanges, selectedRatings]);
  console.log(products, "products");
  return (
    <>
      <img src={zeviIcon} alt="zevi logo " className="zevi-icon" />
      <div className="body-container">
        <Filters
          selectedBrands={selectedBrands}
          selectedPriceRanges={selectedPriceRanges}
          selectedRatings={selectedRatings}
          setSelectedBrands={setSelectedBrands}
          setSelectedPriceRanges={setSelectedPriceRanges}
          setSelectedRatings={setSelectedRatings}
        />
        <ProductsContainer products={filteredProducts} />
      </div>
    </>
  );
};

export default ResultDataContainer;
