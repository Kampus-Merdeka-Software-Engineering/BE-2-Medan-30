import { createRecommendationBulk } from "../modules/recommendation.js";

export const createRecommendationBulkHandler = async (req, res) => {
  try {
    const createdRecommendations = await createRecommendationBulk(req.body);
    res.json(createdRecommendations);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};
