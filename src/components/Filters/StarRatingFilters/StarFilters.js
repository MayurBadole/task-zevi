import React, { useState } from "react";
import {
  downIcon,
  star1Icon,
  star2Icon,
  star3Icon,
  star4Icon,
  star5Icon,
} from "../../../utils/svgImages";
import "./StarFilters.css";

const RatingsFilter = ({ handleRatingSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle dropdown
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <div onClick={toggleDropdown} className="dropbtn">
        <span className="dropDown-title">Ratings</span>
        <img src={downIcon} alt="drop down arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div>
            <input type="checkbox" onChange={() => handleRatingSelect("5")} />
            <img src={star5Icon} alt="5 star icon" />
          </div>
          <div>
            <input type="checkbox" onChange={() => handleRatingSelect("4")} />
            <img src={star4Icon} alt="4 star icon" />
          </div>
          <div>
            <input type="checkbox" onChange={() => handleRatingSelect("3")} />
            <img src={star3Icon} alt="3 star icon" />
          </div>
          <div>
            <input type="checkbox" onChange={() => handleRatingSelect("2")} />
            <img src={star2Icon} alt="2 star icon" />
          </div>
          <div>
            <input type="checkbox" onChange={() => handleRatingSelect("1")} />
            <img src={star1Icon} alt="1 star icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingsFilter;
