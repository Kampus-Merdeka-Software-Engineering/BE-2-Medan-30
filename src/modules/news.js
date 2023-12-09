import {
  Categories,
  News,
  Comments,
  Recommendation,
  Trendings,
  sequelize,
} from "./database.js";
import { slugify } from "../utils/string.js";
import { Sequelize } from "sequelize";

export const createNews = async ({
  title,
  category_id,
  thumbnail,
  thumbnail_description,
  content,
}) => {
  const newNews = News.create({
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

  if (!news) {
    return "News Not Found!";
  }

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
      {
        model: Comments,
        as: "comments",
      },
    ],
    order: [[sequelize.col("comments.createdAt"), "ASC"]],
  });

  if (!news) {
    return "News Not Found!";
  }

  return news;
};

export const getNewsBySlug = async (slug) => {
  let news = await News.findOne({
    where: {
      slug: slug,
    },
    include: [
      {
        model: Categories,
        as: "category",
      },
      {
        model: Comments,
        as: "comments",
      },
    ],
    order: [[sequelize.col("comments.createdAt"), "ASC"]],
  });

  if (!news) {
    return "News Not Found!";
  }

  return news;
};

export const getNewsSearchByTitle = async ({ keyword, limit }) => {
  let news = await News.findAll({
    order: [["createdAt", "DESC"]],
    limit: limit || 25,
    where: {
      title: {
        [Sequelize.Op.like]: `%${keyword || ""}%`,
      },
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

export const getRecommendationNews = async ({ category_id = 0 }) => {
  const recommendedNews = await Recommendation.findOne({
    where: {
      category_id: category_id,
    },
    include: [
      {
        model: News,
        include: [{ model: Categories, as: "category" }],
      },
    ],
  });

  if (!recommendedNews) {
    return "Recommendation With This Category Not Found!";
  }

  return recommendedNews.toJSON().News;
};

export const getTrendingNews = async ({ limit }) => {
  const trendingNews = await Trendings.findAll({
    order: [["trending_rank", "ASC"]],
    limit: limit || 25,
    include: [
      {
        model: News,
        include: [{ model: Categories, as: "category" }],
      },
    ],
  });

  if (!trendingNews) {
    return "Trending News Not Found!";
  }

  return trendingNews.map((trending) => ({
    ...trending.toJSON().News,
    trending_rank: trending.toJSON().trending_rank,
  }));
};
