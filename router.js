import {
  getCategoriesHandler,
  getCategoryByIDHandler,
  createCategoriesBulkHandler,
} from "./src/handler/categories.js";
import { createCommentHandler } from "./src/handler/comment.js";
import { getHomepageHandler } from "./src/handler/general.js";
import {
  createNewsBulkHandler,
  createNewsHandler,
  getNewsByIDHandler,
  getNewsBySearchHandler,
  getNewsBySlugHandler,
  getNewsCommentsHandler,
  getNewsHandler,
} from "./src/handler/news.js";
import { createRecommendationBulkHandler } from "./src/handler/recommendation.js";
import { createTrendingBulkHandler } from "./src/handler/trending.js";

const router = [
  // Homepage
  {
    path: "/homepage",
    method: "get",
    handler: getHomepageHandler,
  },
  // News
  {
    path: "/news",
    method: "get",
    handler: getNewsHandler,
  },
  { path: "/news/create", method: "post", handler: createNewsHandler },
  { path: "/news/create/bulk", method: "post", handler: createNewsBulkHandler },
  {
    path: "/news/search",
    method: "get",
    handler: getNewsBySearchHandler,
  },
  {
    path: "/news/:news_id",
    method: "get",
    handler: getNewsByIDHandler,
  },
  {
    path: "/news/slug/:slug",
    method: "get",
    handler: getNewsBySlugHandler,
  },
  {
    path: "/news/:news_id/comments",
    method: "get",
    handler: getNewsCommentsHandler,
  },
  // Categories
  {
    path: "/categories",
    method: "get",
    handler: getCategoriesHandler,
  },
  {
    path: "/categories/create/bulk",
    method: "post",
    handler: createCategoriesBulkHandler,
  },
  {
    path: "/categories/:id",
    method: "get",
    handler: getCategoryByIDHandler,
  },
  // Comment
  {
    path: "/comments/create",
    method: "post",
    handler: createCommentHandler,
  },
  // Recommendation
  {
    path: "/recommendation/create/bulk",
    method: "post",
    handler: createRecommendationBulkHandler,
  },
  // Trending
  {
    path: "/trending/create/bulk",
    method: "post",
    handler: createTrendingBulkHandler,
  },
];

export default router;
