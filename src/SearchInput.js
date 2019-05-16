import React, { useState } from "react";
import Results from "./Results";

const SearchInput = () => {
  const url = `http://api.giphy.com/v1/gifs/search?q=cheeseburgers&limit=9&api_key=${
    process.env.API
  }`;

  const [query, setQuery] = useState("cheese");
  const [res, setData] = useState(undefined);

  function showResults() {
    if (res != undefined) {
      return <Results data={res} />;
    }
  }

  async function requestGiphy() {
    fetch(`${"https://cors-anywhere.herokuapp.com/"}${url}`, {
      crossDomain: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Accept, Content-Type: application/json, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      }
    })
      .then(response => response.json())
      .then(data => setData(data));
  }
  return (
    <div className="search-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestGiphy();
        }}
      >
        <div className="input-container">
          <input
            className="search-input"
            onChange={event => setQuery(event.target.value)}
            value={query}
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
      {showResults()}
    </div>
  );
};

export default SearchInput;
