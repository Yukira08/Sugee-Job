import React from "react";

import { BiSearch } from "react-icons/bi";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="searchform">
      <div className=" container">
        <form>
          <div className="searchform-container d-flex justify-content-between">
            <BiSearch size={25} color={"#9DA3AE"}/>
            <input type="text"  placeholder="Find Job Title"></input>
            <button className="find">Find Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
