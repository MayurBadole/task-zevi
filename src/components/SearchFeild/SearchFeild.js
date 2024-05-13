import { useNavigate } from "react-router-dom";
import useFakeProducts from "../../useFakeProducts";
import { searchBarIcon } from "../../utils/svgImages";
import "./SearchFeild.css";
const SearchFeild = ({ handleFocus, setQuery, query }) => {
  const navigate = useNavigate();

  useFakeProducts(10, query);

  const hanldeInput = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = () => {
    navigate("/results");
    console.log(query);
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search"
        onFocus={handleFocus}
        onChange={(e) => hanldeInput(e)}
      />
      <span onClick={() => handleSubmit()}>
        <img src={searchBarIcon} alt="search bar icon" className="search-bar" />{" "}
      </span>
    </div>
  );
};

export default SearchFeild;
