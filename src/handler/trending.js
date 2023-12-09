import { createTrendingBulk } from "../modules/trending.js";

export const createTrendingBulkHandler = async (req, res) => {
  try {
    const createdTrendings = await createTrendingBulk(req.body);
    res.json(createdTrendings);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};
