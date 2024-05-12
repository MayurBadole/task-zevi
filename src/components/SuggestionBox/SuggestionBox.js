import "./SuggestionBox.css";

const SuggestionBox = () => {
  return (
    <div className="suggestion-box-container">
      <div className="suggestion-list">
        <span className="suggestion-title">Latest Trends</span>
        <div className="row-property">
          <div className="suggestion-model">
            <img
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg"
              alt=" suggestion item"
              className="model-image"
            />
            <span className="suggestion-name">Shirt with puffed sleeves</span>
          </div>
          <div className="suggestion-model">
            <img
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg"
              alt=" suggestion item"
              className="model-image"
            />
            <span className="suggestion-name">Shirt with puffed sleeves</span>
          </div>
          <div className="suggestion-model">
            <img
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg"
              alt=" suggestion item"
              className="model-image"
            />
            <span className="suggestion-name">Shirt with puffed sleeves</span>
          </div>
          <div className="suggestion-model">
            <img
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg"
              alt=" suggestion item"
              className="model-image"
            />
            <span className="suggestion-name">Shirt with puffed sleeves</span>
          </div>
        </div>
        <span className="suggestion-title">Popular suggestions</span>
        <div className="suggestion-items">
          <span>Striped shirt dress</span>
          <span>Striped shirt dress</span>
          <span>Striped shirt dress</span>
          <span>Striped shirt dress</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;
