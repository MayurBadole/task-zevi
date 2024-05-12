import { useState } from "react";
import { downIcon, star1Icon, star2Icon, star3Icon, star4Icon, star5Icon } from "../../utils/svgImages";
import "./Filters.css";
const Filters = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Toggle dropdown
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  // Select brand
  function handleBrandSelect(brand) {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  }
  console.log(selectedBrands, "selectedBrands");
  return (
    <div className="filters-container">
      <span className="title">Search Results</span>
      <div className="dropdown">
        <div onClick={toggleDropdown} className="dropbtn">
          <span className="dropDown-title">BRAND</span>
          <img src={downIcon} alt="drop down arrow" />
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("jara")}
                onChange={() => handleBrandSelect("jara")}
              />
              Jara
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("H&H")}
                onChange={() => handleBrandSelect("H&H")}
              />
              H&H
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("Addidas")}
                onChange={() => handleBrandSelect("Addidas")}
              />
              Addidas
            </label>
          </div>
        )}
      </div>
      <div className="dropdown">
        <div onClick={toggleDropdown} className="dropbtn">
          <span className="dropDown-title">price range</span>
          <img src={downIcon} alt="drop down arrow" />
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("jara")}
                onChange={() => handleBrandSelect("jara")}
              />
              1000 -3000
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("H&H")}
                onChange={() => handleBrandSelect("H&H")}
              />
              5000 - 10,000
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("Addidas")}
                onChange={() => handleBrandSelect("Addidas")}
              />
              20,000 - 50,000
            </label>
          </div>
        )}
      </div>
      <div className="dropdown">
        <div onClick={toggleDropdown} className="dropbtn">
          <span className="dropDown-title">Ratings</span>
          <img src={downIcon} alt="drop down arrow" />
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("jara")}
                onChange={() => handleBrandSelect("jara")}
              />
              <img src={star5Icon} alt="5 star icon" />
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("H&H")}
                onChange={() => handleBrandSelect("H&H")}
              />
              <img src={star4Icon} alt="4 star icon" />
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("Addidas")}
                onChange={() => handleBrandSelect("Addidas")}
              />
              <img src={star3Icon} alt="3 star icon" />
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("Addidas")}
                onChange={() => handleBrandSelect("Addidas")}
              />
              <img src={star2Icon} alt="2 star icon" />
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes("Addidas")}
                onChange={() => handleBrandSelect("Addidas")}
              />
              <img src={star1Icon} alt="1 star icon" />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
