import React from 'react'

import {MdKeyboardArrowUp} from "react-icons/md";
import "./FilterHeading.css";
const FilterHeading = (props) => {
  return (
    <div className="filter_heading d-flex justify-content-between">
    <h5>{props.title}</h5>
    <button>
      <span>View Less</span>
      <MdKeyboardArrowUp />
    </button>
  </div>
  )
}

export default FilterHeading
