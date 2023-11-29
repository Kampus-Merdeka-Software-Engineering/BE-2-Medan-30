import {
  getNews,
  getRecommendationNews,
  getTrendingNews,
} from "../modules/news.js";
import { getCategories } from "../modules/categories.js";

export const getHomepageService = (req, res) => {
  const categories = getCategories({ limit: 9 });
  const recommendation = getRecommendationNews({});
  const latestNews = getNews({ limit: 3 });
  const trendingNews = getTrendingNews({ limit: 9 });
  const moreNews = getNews({ limit: 4 });

  res.send({
    categories,
    recommendation,
    latest: latestNews,
    trending: trendingNews,
    moreNews,
  });
};
