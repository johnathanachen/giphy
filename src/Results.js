import React from "react";

const Results = ({ data }) => {
  return (
    <div className="results">
      {/* {console.log(data.data)} */}
      <ul>
        {data.data.map((item, index) => (
          <li key={index}>
            <img alt="giphy" src={item.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
