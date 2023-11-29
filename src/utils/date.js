export const sortCreatedAt = (a, b) => {
  const dateA = new Date(a.created_at).getTime();
  const dateB = new Date(b.created_at).getTime();
  return dateB - dateA;
};
