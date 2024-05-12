import { searchBarIcon } from "../../utils/svgImages";
import "./SearchFeild.css";
const SearchFeild = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Search" />
      <img src={searchBarIcon} alt="search bar icon" className="search-bar" />
    </div>
  );
};

export default SearchFeild;
