import { createRecommendationBulk } from "../modules/recommendation.js";

export const createRecommendationBulkService = async (req, res) => {
  const createdRecommendations = await createRecommendationBulk(req.body);
  res.json(createdRecommendations);
};
