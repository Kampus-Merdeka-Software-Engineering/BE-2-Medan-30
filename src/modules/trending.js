import { Trendings } from "./database.js";

export const createTrendingBulk = async (trendings) => {
  const createdTrendings = await Trendings.bulkCreate(trendings);
  return createdTrendings;
};
