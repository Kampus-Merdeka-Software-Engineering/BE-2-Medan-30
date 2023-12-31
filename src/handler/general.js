import {
  getNews,
  getRecommendationNews,
  getTrendingNews,
} from "../modules/news.js";
import { getCategories } from "../modules/categories.js";

export const getHomepageHandler = async (req, res) => {
  try {
    const categoryID = req.query.category_id;

    const categories = await getCategories({ limit: 9 });
    const recommendation = await getRecommendationNews({
      category_id: categoryID,
    });
    const latestNews = await getNews({ limit: 3, category_id: categoryID });
    const trendingNews = await getTrendingNews({ limit: 9 });
    const moreNews = await getNews({ limit: 4, category_id: categoryID });

    res.send({
      categories,
      recommendation,
      latest: latestNews,
      trending: trendingNews,
      moreNews,
    });
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};
