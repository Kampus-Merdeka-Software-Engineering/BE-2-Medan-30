import { Recommendation } from "./database.js";

export const createRecommendationBulk = async (recommendations) => {
  const createdRecommendations = await Recommendation.bulkCreate(
    recommendations
  );
  return createdRecommendations;
};
