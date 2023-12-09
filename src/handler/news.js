import {
  createNews,
  getNews,
  getNewsByID,
  getNewsBySlug,
  getNewsSearchByTitle,
  createNewsBulk,
} from "../modules/news.js";
import { getCommentsByNewsID } from "../modules/comments.js";

export const getNewsHandler = async (req, res) => {
  try {
    const news = await getNews({
      category_id: req.query.category_id,
      limit: Number(req.query.limit),
    });

    res.send(news);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const getNewsBySearchHandler = async (req, res) => {
  try {
    const news = await getNewsSearchByTitle({
      keyword: req.query.keyword,
      limit: Number(req.query.limit),
    });
    res.send(news);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const getNewsByIDHandler = async (req, res) => {
  try {
    const news = await getNewsByID(req.params.news_id);
    if (typeof news !== "object") {
      res.status(404).send({ errorCode: 404, error: "News Not Found!" });
    } else {
      res.send(news);
    }
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const getNewsBySlugHandler = async (req, res) => {
  try {
    const news = await getNewsBySlug(req.params.slug);
    if (typeof news !== "object") {
      res.status(404).send({ errorCode: 404, error: "News Not Found!" });
    } else {
      res.send(news);
    }
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const getNewsCommentsHandler = async (req, res) => {
  try {
    const comments = await getCommentsByNewsID({
      news_id: req.params.id,
      limit: Number(req.query.limit),
    });
    res.send(comments);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const createNewsHandler = async (req, res) => {
  try {
    const createdNews = await createNews(req.body);
    res.json(createdNews);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};

export const createNewsBulkHandler = async (req, res) => {
  try {
    const createdNews = await createNewsBulk(req.body);
    res.json(createdNews);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};
