import { getCategories, getCategoryByID } from "../modules/categories.js";

export const getCategoriesService = (req, res) => {
  const categories = getCategories({ limit: Number(req.query.limit) });
  res.send(categories);
};

export const getCategoryByIDService = (req, res) => {
  const category = getCategoryByID(Number(req.params.id));
  res.send(category);
};
