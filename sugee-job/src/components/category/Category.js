import React from "react";
import { useEffect } from "react";

import useHttp from "../hooks/use-http";
import CategoryList from "./CategoryList";

export async function fetchCategory() {
  const response = await fetch(
    "https://react-http-ae93e-default-rtdb.firebaseio.com/category.json"
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData = await response.json();

  const loadedCategories = [];
  for (const key in responseData) {
    loadedCategories.push({
      id: key,
      title: responseData[key].title,
      image: responseData[key].image,
      categories_list: responseData[key].categories,
    });
  }
  return loadedCategories;
}

const Category = () => {
  const { sendRequest, status, data: loadedCategories, error } = useHttp(
    fetchCategory,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <div className="centered">Loading....</div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedCategories || loadedCategories.length === 0)
  ) {
    return <p>No Categories Found.</p>;
  }

  return (
    <div class="py-5">
      <h1 class="text-center">Browse Jobs by Category</h1>
      <CategoryList categories={loadedCategories} />
    </div>
  );
};

export default Category;
