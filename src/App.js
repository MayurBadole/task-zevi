import "./App.css";
import SearchFeild from "./components/SearchFeild/SearchFeild";
import SuggestionBox from "./components/SuggestionBox/SuggestionBox";
import { zeviIcon } from "./utils/svgImages";

function App() {
  return (
    <div className="App">
      <img src={zeviIcon} alt="zevi logo" className="zevi-logo" />
      <SearchFeild />
      <SuggestionBox/>
    </div>
  );
}

export default App;
