import "./App.css";
import SearchFeild from "./components/SearchFeild/SearchFeild";
import { zeviIcon } from "./utils/svgImages";

function App() {
  return (
    <div className="App">
      <img src={zeviIcon} alt="zevi logo" className="zevi-logo" />
      <SearchFeild />
    </div>
  );
}

export default App;
