import express from "express";
import {
  getNews,
  getNewsByID,
  getNewsBySlug,
  getNewsSearchByTitle,
} from "./services/news.js";
import { getCategories, getCategoryByID } from "./services/categories.js";
import { getCommentsByNewsID } from "./services/comments.js";

const app = express();
const port = 3300;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/news", (req, res) => {
  const news = getNews({
    category_id: Number(req.query.category_id),
    limit: Number(req.query.limit),
  });

  res.send(news);
});

// Search News By Keyword
app.get("/news/search", (req, res) => {
  const news = getNewsSearchByTitle({
    keyword: req.query.keyword,
    limit: Number(req.query.limit),
  });
  res.send(news);
});

// Get News By ID
app.get("/news/:news_id", (req, res) => {
  const news = getNewsByID(Number(req.params.news_id));
  res.send(news);
});

// Get News By Slug
app.get("/news/slug/:slug", (req, res) => {
  const news = getNewsBySlug(req.params.slug);
  res.send(news);
});

// Get Categories
app.get("/categories", (req, res) => {
  const categories = getCategories(Number(req.query.limit));

  res.send(categories);
});

// Get Categories By ID
app.get("/categories/:id", (req, res) => {
  const category = getCategoryByID(Number(req.params.id));
  res.send(category);
});

// Get Comment By News ID
app.get("/news/:id/comments", (req, res) => {
  const comments = getCommentsByNewsID({
    news_id: Number(req.params.id),
    limit: Number(req.query.limit),
  });
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
