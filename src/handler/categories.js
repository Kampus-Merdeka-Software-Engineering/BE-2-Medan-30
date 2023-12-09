import {
  getCategories,
  getCategoryByID,
  createCategoriesBulk,
} from "../modules/categories.js";

export const createCategoriesBulkHandler = async (req, res) => {
  try {
    const createdCategories = await createCategoriesBulk(req.body);
    res.json(createdCategories);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const getCategoriesHandler = async (req, res) => {
  try {
    const categories = await getCategories({ limit: Number(req.query.limit) });
    res.send(categories);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const getCategoryByIDHandler = async (req, res) => {
  try {
    const category = await getCategoryByID(req.params.id);
    res.send(category);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};
