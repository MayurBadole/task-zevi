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
          <label>
            <input
              type="checkbox"
              onChange={() => handlePriceRangeSelect("1000 - 3000")}
            />
            1000 - 3000
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handlePriceRangeSelect("5000 - 10,000")}
            />
            5000 - 10,000
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handlePriceRangeSelect("20,000 - 50,000")}
            />
            20,000 - 50,000
          </label>
        </div>
      )}
    </div>
  );
};

export default PriceRangeFilter;
