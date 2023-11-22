import newsData from "../dummy/news.json" assert { type: "json" };
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
