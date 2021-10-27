import React from "react";

const Header = () => {
  return (
    <div className="App">
      <haeder className="header">
        <h1>COVID-19</h1>
        <select>
          <option>국내</option>
          <option>세계</option>
        </select>
      </haeder>
    </div>
  );
};

export default Header;
