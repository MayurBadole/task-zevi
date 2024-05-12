import { useState, useEffect } from "react";
import "./App.css";
import ResultDataContainer from "./components/Result-Container/ResultDataContainer";
import useFakeProducts from "./useFakeProducts";
// import SearchFeild from "./components/SearchFeild/SearchFeild";
// import SuggestionBox from "./components/SuggestionBox/SuggestionBox";
// import { zeviIcon } from "./utils/svgImages";

function App() {
  const [page, setPage] = useState(10);

  const products = useFakeProducts(page);

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setPage((oldPage) => oldPage + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  // const [isFocused, setIsFocused] = useState(false);
  // const handleFocus = () => {
  //   setIsFocused(true);
  // };
  // const handleBlur = () => {
  //   setIsFocused(false);
  // };
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  return (
    <>
      {/* <div className="App">
        <img src={zeviIcon} alt="zevi logo" className="zevi-logo" />
        <SearchFeild handleFocus={handleFocus} handleBlur={handleBlur} />
        {isFocused && <SuggestionBox />}
      </div> */}
      <ResultDataContainer products={products} />
    </>
  );
}

export default App;
