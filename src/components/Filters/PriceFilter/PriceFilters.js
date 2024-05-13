import React, { useState } from "react";
import "./PriceFilters.css";
import { downIcon } from "../../../utils/svgImages";

const PriceRangeFilter = ({ handlePriceRangeSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle dropdown
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <div onClick={toggleDropdown} className="dropbtn">
        <span className="dropDown-title">Price Range</span>
        <img src={downIcon} alt="drop down arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div>
            <input
              type="checkbox"
              onChange={() => handlePriceRangeSelect("500 - 1000")}
            />
            <span>500 - 1000</span>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => handlePriceRangeSelect("1500 - 5000")}
            />
            <span> 1500 - 5,000</span>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => handlePriceRangeSelect("5500 - 10000")}
            />
            <span>5,500 - 10,000</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeFilter;
