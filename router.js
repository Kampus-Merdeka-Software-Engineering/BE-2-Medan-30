import {
  getCategoriesService,
  getCategoryByIDService,
  createCategoriesBulkService,
} from "./src/services/categories.js";
import { getHomepageService } from "./src/services/general.js";
import {
  createNewsBulkService,
  createNewsService,
  getNewsByIDService,
  getNewsBySearchService,
  getNewsBySlugService,
  getNewsCommentsService,
  getNewsService,
} from "./src/services/news.js";

const router = [
  {
    path: "/homepage",
    method: "get",
    handler: getHomepageService,
  },
  {
    path: "/news",
    method: "get",
    handler: getNewsService,
  },
  { path: "/news/create", method: "post", handler: createNewsService },
  { path: "/news/create/bulk", method: "post", handler: createNewsBulkService },
  {
    path: "/news/search",
    method: "get",
    handler: getNewsBySearchService,
  },
  {
    path: "/news/:news_id",
    method: "get",
    handler: getNewsByIDService,
  },
  {
    path: "/news/slug/:slug",
    method: "get",
    handler: getNewsBySlugService,
  },
  {
    path: "/news/:news_id/comments",
    method: "get",
    handler: getNewsCommentsService,
  },
  {
    path: "/categories",
    method: "get",
    handler: getCategoriesService,
  },
  {
    path: "/categories/create/bulk",
    method: "post",
    handler: createCategoriesBulkService,
  },
  {
    path: "/categories/:id",
    method: "get",
    handler: getCategoryByIDService,
  },
];

export default router;
