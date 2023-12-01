import { Comments } from "./database.js";

export const getCommentsByNewsID = async ({ news_id, limit }) => {
  const comments = await Comments.findAll({
    order: [["createdAt", "DESC"]],
    where: {
      news_id: news_id,
    },
    limit: limit || 25,
  });

  return comments;
};
