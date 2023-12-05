import {
  createNews,
  getNews,
  getNewsByID,
  getNewsBySlug,
  getNewsSearchByTitle,
  createNewsBulk,
} from "../modules/news.js";
import { getCommentsByNewsID } from "../modules/comments.js";

export const getNewsService = async (req, res) => {
  const news = await getNews({
    category_id: req.query.category_id,
    limit: Number(req.query.limit),
  });

  res.send(news);
};

export const getNewsBySearchService = async (req, res) => {
  const news = await getNewsSearchByTitle({
    keyword: req.query.keyword,
    limit: Number(req.query.limit),
  });
  res.send(news);
};

export const getNewsByIDService = async (req, res) => {
  const news = await getNewsByID(req.params.news_id);
  res.send(news);
};

export const getNewsBySlugService = async (req, res) => {
  const news = await getNewsBySlug(req.params.slug);
  res.send(news);
};

export const getNewsCommentsService = async (req, res) => {
  const comments = await getCommentsByNewsID({
    news_id: req.params.id,
    limit: Number(req.query.limit),
  });
  res.send(comments);
};

export const createNewsService = async (req, res) => {
  const createdNews = await createNews(req.body);

  res.json(createdNews);
};

export const createNewsBulkService = async (req, res) => {
  const createdNews = await createNewsBulk(req.body);

  res.json(createdNews);
};
