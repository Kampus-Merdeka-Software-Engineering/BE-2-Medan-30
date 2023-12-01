import { createTrendingBulk } from "../modules/trending.js";

export const createTrendingBulkService = async (req, res) => {
  const createdTrendings = await createTrendingBulk(req.body);
  res.json(createdTrendings);
};
