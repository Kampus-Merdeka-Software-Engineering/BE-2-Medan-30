import {
  getNews,
  getNewsByID,
  getNewsBySlug,
  getNewsSearchByTitle,
} from "../modules/news.js";
import { getCommentsByNewsID } from "../modules/comments.js";

export const getNewsService = (req, res) => {
  const news = getNews({
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

export const getNewsByIDService = (req, res) => {
  const news = getNewsByID(Number(req.params.news_id));
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
