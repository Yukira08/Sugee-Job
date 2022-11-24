import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

const CategoryItem = (props) => {
  return (
    <div class="col-lg-6 py-5">
      <img
        src={require("../../assets/category1.png")}
        height="240"
        class="rounded w-100"
      ></img>
      <h6 class="my-3">{props.title}</h6>
      <div class="w-75">
        {props.categories_list.map((cat) => (
          <button  class="d-inline-block category-button">{cat}</button>
        ))}
      </div>
      <div class="mt-3 mb-4">
        <a href="#">Many More...</a>
      </div>
      <button class="btn btn-outline-dark px-4">
        Browse More
        <MdKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default CategoryItem;
