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
          <div>
            <input
              type="checkbox"
              onChange={() => handleBrandSelect("Adidas")}
            />
            <span>Adidas</span>
          </div>
          <div>
            <input type="checkbox" onChange={() => handleBrandSelect("Nike")} />
            <span>Nike</span>
          </div>
          <div>
            <input type="checkbox" onChange={() => handleBrandSelect("Puma")} />
            <span>Puma</span>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => handleBrandSelect("Reebok")}
            />
            <span>Reebok</span>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => handleBrandSelect("Under Armour")}
            />
            <span>Under Armour</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandFilters;
