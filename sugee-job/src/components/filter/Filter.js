import React from "react";

import { MdOutlineDeleteForever, MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

import "./Filter.css";
import FilterHeading from "./FilterHeading";
const Filter = () => {
  return (
    <div className="filter mt-5">
      <div className="d-flex justify-content-between">
        <h3>Jobs Filter</h3>
        <button className="clear-btn">
          <span>Clear Filter</span>
          <MdOutlineDeleteForever />
        </button>
      </div>
      <hr />
      <div className="job-category mb-4">
        <h5>Job Categories</h5>
        <form>
          <div class="search-box">
            <BiSearch size={25} />
            <input placeholder="Filter Job Categories"></input>
          </div>
        </form>
      </div>
      <hr />
      <div className="filter-salary">
        <h5>Salary</h5>
        <div class="form-group">
          <select class="form-control" id="salary_type">
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="ex: 600000 JPY"
        />
      </div>
      <hr />
      <div className="employment-type">
        <FilterHeading title="Employment Type" />
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">Full-Time</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">Part-Time</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">Internship</label>
        </div>
      </div>
      <hr />
      <div className="skills">
        <FilterHeading title="Skills Required" />
        <form>
          <div class="search-box">
            <BiSearch size={25} />
            <input placeholder="Filter Skills Required"></input>
          </div>
        </form>
      </div>
      <hr />
      <div className="languages">
        <FilterHeading title="Language Skills Required" />
        <div>
          <p>Native Language</p>
          <div class="form-group mb-3 mb-3">
            <select class="form-control" id="native">
              <option>English</option>
              <option>Japanese</option>
              <option>Chinese</option>
              <option>Korean</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
        <div>
          <p>English</p>
          <div class="form-group mb-3">
            <select class="form-control" id="english">
              <option>Advanced</option>
              <option>Intermediate</option>
              <option>Beginner</option>
            </select>
          </div>
        </div>
        <div>
          <p>JLPT</p>
          <div class="form-group mb-3">
            <select class="form-control" id="jlpt">
              <option>N1</option>
              <option>N2</option>
              <option>N3</option>
              <option>N4</option>
              <option>N5</option>
            </select>
          </div>
        </div>
        <div>
          <p>Japanese</p>
          <div class="form-group mb-3">
          <select class="form-control" id="japanese">
              <option>Advanced</option>
              <option>Intermediate</option>
              <option>Beginner</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="experience">
        <FilterHeading title="Working Experience" />
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">Less Than a Year</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">1 to 3 Years</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">3 to 5 Years</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">more than 5 years</label>
        </div>
      </div>
      <button className="mt-3 w-100 filter-btn">Apply Filter <MdKeyboardArrowRight size={20}/></button>
    </div>
  );
};

export default Filter;
