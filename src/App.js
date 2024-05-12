// import { useState } from "react";
import "./App.css";
import ResultDataContainer from "./components/Result-Container/ResultDataContainer";
// import SearchFeild from "./components/SearchFeild/SearchFeild";
// import SuggestionBox from "./components/SuggestionBox/SuggestionBox";
// import { zeviIcon } from "./utils/svgImages";

function App() {
  // const [isFocused, setIsFocused] = useState(false);
  // const handleFocus = () => {
  //   setIsFocused(true);
  // };
  // const handleBlur = () => {
  //   setIsFocused(false);
  // };
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <>
      {/* <div className="App">
        <img src={zeviIcon} alt="zevi logo" className="zevi-logo" />
        <SearchFeild handleFocus={handleFocus} handleBlur={handleBlur} />
        {isFocused && <SuggestionBox />}
      </div> */}
      <ResultDataContainer />
    </>
  );
}

export default App;
