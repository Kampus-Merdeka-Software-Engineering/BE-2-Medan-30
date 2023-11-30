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
    category_id: Number(req.query.category_id),
    limit: Number(req.query.limit),
  });

  res.send(news);
};

export const getNewsBySearchService = (req, res) => {
  const news = getNewsSearchByTitle({
    keyword: req.query.keyword,
    limit: Number(req.query.limit),
  });
  res.send(news);
};

export const getNewsByIDService = async (req, res) => {
  const news = await getNewsByID(Number(req.params.news_id));
  res.send(news);
};

export const getNewsBySlugService = (req, res) => {
  const news = getNewsBySlug(req.params.slug);
  res.send(news);
};

export const getNewsCommentsService = (req, res) => {
  const comments = getCommentsByNewsID({
    news_id: Number(req.params.id),
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
