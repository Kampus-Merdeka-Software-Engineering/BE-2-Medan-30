import { createComment } from "../modules/comments.js";

export const createCommentHandler = async (req, res) => {
  try {
    const createdComment = await createComment(req.body);
    res.json(createdComment);
  } catch (err) {
    res.status(500).send({ errorCode: 500, error: err });
  }
};
