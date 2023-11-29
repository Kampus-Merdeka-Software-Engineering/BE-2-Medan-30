import commentsData from "../dummy/comments.json" assert { type: "json" };

export const getCommentsByNewsID = ({ news_id, limit }) => {
  let comments = commentsData;

  if (news_id) {
    comments = comments.filter((comment) => comment.news_id === news_id);
  }

  if (limit) {
    comments = comments.slice(0, limit);
  }

  return comments;
};
