import { createComment } from "../modules/comments.js";

export const createCommentServices = async (req, res) => {
  const createdComment = await createComment(req.body);
  res.json(createdComment);
};
