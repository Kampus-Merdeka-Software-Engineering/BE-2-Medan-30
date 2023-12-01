import categoriesData from "../dummy/categories.json" assert { type: "json" };
import { Categories } from "./database.js";

export const createCategoriesBulk = async (categories) => {
  const createdCategories = await Categories.bulkCreate(categories);
  return createdCategories;
};

export const getCategories = async ({ limit }) => {
  const categories = await Categories.findAll({
    limit: limit || 25,
  });

  return categories;
};

export const getCategoryByID = async (id) => {
  const category = await Categories.findOne({ where: { id: id } });

  if (!category) {
    return "Category Not Found!";
  }

  return category;
};
