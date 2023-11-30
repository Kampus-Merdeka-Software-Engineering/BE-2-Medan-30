import newsData from "../dummy/news.json" assert { type: "json" };
import recommendationData from "../dummy/recommendation.json" assert { type: "json" };
import trendingData from "../dummy/trending.json" assert { type: "json" };
import { sortCreatedAt } from "../utils/date.js";
import { Categories, News } from "./database.js";
import { slugify } from "../utils/string.js";

export const createNews = async ({
  title,
  category_id,
  thumbnail,
  thumbnail_description,
  content,
}) => {
  const newNews = News.build({
    title,
    slug: slugify(title),
    category_id,
    thumbnail,
    thumbnail_description,
    content,
  });

  return await newNews;
};

export const createNewsBulk = async (news) => {
  const bulkNews = News.bulkCreate(
    news.map((n) => ({ ...n, slug: slugify(n.title) }))
  );

  return await bulkNews;
};

export const getNews = async ({ category_id, limit }) => {
  const filter = {};

  // Filter Category
  if (category_id) {
    filter.category_id = category_id;
  }

  let news = await News.findAll({
    order: [["createdAt", "DESC"]],
    limit: limit || 25,
    where: filter,
    include: [
      {
        model: Categories,
        as: "category",
      },
    ],
  });

  return news;
};

export const getNewsByID = async (news_id) => {
  let news = await News.findOne({
    where: {
      id: news_id,
    },
    include: [
      {
        model: Categories,
        as: "category",
      },
    ],
  });

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
