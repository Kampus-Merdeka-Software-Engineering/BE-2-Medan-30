import {
  getCategories,
  getCategoryByID,
  createCategoriesBulk,
} from "../modules/categories.js";

export const createCategoriesBulkService = async (req, res) => {
  const createdCategories = await createCategoriesBulk(req.body);
  res.json(createdCategories);
};

export const getCategoriesService = async (req, res) => {
  const categories = await getCategories({ limit: Number(req.query.limit) });
  res.send(categories);
};

export const getCategoryByIDService = async (req, res) => {
  const category = await getCategoryByID(req.params.id);
  res.send(category);
};
