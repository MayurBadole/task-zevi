import React, { useState } from "react";
import "./BrandFilters.css";
import { downIcon } from "../../../utils/svgImages";

const BrandFilters = ({ handleBrandSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle dropdown
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <div onClick={toggleDropdown} className="dropbtn">
        <span className="dropDown-title">BRAND</span>
        <img src={downIcon} alt="drop down arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <label>
            <input type="checkbox" onChange={() => handleBrandSelect("jara")} />
            Jara
          </label>
          <label>
            <input type="checkbox" onChange={() => handleBrandSelect("H&H")} />
            H&H
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleBrandSelect("Addidas")}
            />
            Addidas
          </label>
        </div>
      )}
    </div>
  );
};

export default BrandFilters;
