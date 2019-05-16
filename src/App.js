import React from "react";
import { render } from "react-dom";
import SearchInput from "./SearchInput";

const App = () => {
  return (
    <div className="container">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        className="giphy-img"
        src="https://giphy.com/static/img/giphy_logo_square_social.png"
      />
      <SearchInput />
    </div>
  );
};

render(<App />, document.getElementById("root"));
