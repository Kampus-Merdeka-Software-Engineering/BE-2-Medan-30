import {
  getCategoriesService,
  getCategoryByIDService,
} from "./src/services/categories.js";
import { getHomepageService } from "./src/services/general.js";
import {
  getNewsByIDService,
  getNewsBySearchService,
  getNewsBySlugService,
  getNewsCommentsService,
  getNewsService,
} from "./src/services/news.js";

const router = {
  "/homepage": getHomepageService,
  "/news": getNewsService,
  "/news/search": getNewsBySearchService,
  "/news/:news_id": getNewsByIDService,
  "/news/slug/:slug": getNewsBySlugService,
  "/news/:news_id/comments": getNewsCommentsService,
  "/categories": getCategoriesService,
  "/categories/:id": getCategoryByIDService,
};

export default router;
