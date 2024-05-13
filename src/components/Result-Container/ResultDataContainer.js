import { useState, useEffect } from "react";
import { searchBarIcon, zeviIcon } from "../../utils/svgImages";
import Filters from "../Filters/Filters";
import ProductsContainer from "../Products-Container/ProductsContainer";
import "./ResultDataContainer.css";

const ResultDataContainer = ({ products, query, setQuery }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const hanldeInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    if (query.trim() === "") {
      setFilteredProducts(products);  
    } else {
      // Filter products based on query value
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    // Reset filtered products when query changes
    if (query.trim() === "") {
      setFilteredProducts(products);  
    }
  }, [products, query]);


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
  return (
    <>
      <img src={zeviIcon} alt="zevi logo " className="zevi-icon" />
      <div className="container-i">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => hanldeInput(e)}
        />
        <span onClick={() => handleSubmit()}>
          <img
            src={searchBarIcon}
            alt="search bar icon"
            className="search-bar-i"
          />{" "}
        </span>
      </div>
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
