import newsData from "../dummy/news.json" assert { type: "json" };
import recommendationData from "../dummy/recommendation.json" assert { type: "json" };
import trendingData from "../dummy/trending.json" assert { type: "json" };
import { sortCreatedAt } from "../utils/date.js";

export const getNews = ({ category_id, limit }) => {
  let news = newsData;

  // Filter Category
  if (category_id) {
    news = news.filter((news) => news.category_id === category_id);
  }

  // Filter Limit
  if (limit) {
    news = news.slice(0, limit);
  }

  return news.sort(sortCreatedAt);
};

export const getNewsByID = (news_id) => {
  const news = newsData.find((news) => news.id === news_id);

  if (!news) {
    return "News Not Found!";
  }

  return news;
};

export const getNewsBySlug = (slug) => {
  const news = newsData.find((news) => news.slug === slug);

  if (!news) {
    return "News Not Found!";
  }

  return news;
};

export const getNewsSearchByTitle = ({ keyword, limit }) => {
  const news = newsData.filter((news) =>
    news.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (!news) {
    return `News with keyword "${keyword}" Not Found!`;
  }

  if (limit) {
    news.slice(0, limit);
  }

  return news;
};

export const getRecommendationNews = ({ category_id = 0 }) => {
  const recommendationNewsID = recommendationData.find(
    (recommendation) => recommendation.category_id === category_id
  ).news_id;

  if (!recommendationNewsID) {
    return "Recommendation With This Category Not Found!";
  }

  const news = getNewsByID(recommendationNewsID);

  return news;
};

export const getTrendingNews = ({ limit }) => {
  let trendingNews = trendingData
    .sort((a, b) => a.trending_rank - b.trending_rank)
    .map((trending) => ({
      ...trending,
      news: getNewsByID(trending.news_id),
    }));

  if (!trendingNews) {
    return "Trending News Not Found!";
  }

  if (limit) {
    trendingNews = trendingNews.slice(0, limit);
  }

  return trendingNews;
};
