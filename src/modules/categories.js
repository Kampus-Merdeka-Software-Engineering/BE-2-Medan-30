import categoriesData from "../dummy/categories.json" assert { type: "json" };
import { Categories } from "./database.js";
export const createCategoriesBulk = async (categories) => {
  const createdCategories = await Categories.bulkCreate(categories);
  return createdCategories;
};

export const getCategories = ({ limit }) => {
  let categories = categoriesData;

  if (limit) {
    categories = categories.slice(0, limit);
  }

  return categories;
};

export const getCategoryByID = (id) => {
  const category = categoriesData.find((category) => category.id === id);

  if (!category) {
    return "Category Not Found!";
  }

  return category;
};
