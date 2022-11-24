import React, { Fragment } from "react";

import CategoryItem from "./CategoryItem";
import "./CategoryList.css";

const CategoryList = (props) => {
  return (
    <Fragment>
      <div class="category-cards">
        <ul class="list-unstyled category-card mx-5">
          <div class="row">
            {props.categories.map((category) => (
              <CategoryItem
                key={category.id}
                id={category.id}
                title={category.title}
                image={category.image}
                categories_list={category.categories_list}
              />
            ))}
          </div>
        </ul>
      </div>
    </Fragment>
  );
};

export default CategoryList;
