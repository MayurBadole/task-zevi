import { useState } from "react";
import "./Filters.css";
import PriceRangeFilter from "./PriceFilter/PriceFilters";
import RatingsFilter from "./StarRatingFilters/StarFilters";
import BrandFilters from "./BrandFilters/BrandFilters";
const Filters = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Select brand
  function handleBrandSelect(brand) {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  }

  // Select price range
  function handlePriceRangeSelect(priceRange) {
    if (selectedPriceRanges.includes(priceRange)) {
      setSelectedPriceRanges(
        selectedPriceRanges.filter((item) => item !== priceRange)
      );
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, priceRange]);
    }
  }

  // Select rating
  function handleRatingSelect(rating) {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((item) => item !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  }
  return (
    <div className="filters-container">
      <span className="title">Search Results</span>

      {/* Brand Filter */}
      <BrandFilters handleBrandSelect={handleBrandSelect} />

      {/* Price Range Filter */}
      <PriceRangeFilter handlePriceRangeSelect={handlePriceRangeSelect} />

      {/* Ratings Filter */}
      <RatingsFilter handleRatingSelect={handleRatingSelect} />
    </div>
  );
};

export default Filters;
