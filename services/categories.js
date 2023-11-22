import categoriesData from "../dummy/categories.json" assert { type: "json" };

export const getCategories = (limit) => {
  let categories = categoriesData;

  if (limit) {
    categories = categories.slice(0, limit);
  }

  return categories;
};

export const getCategoryByID = (id) => {
  const category = categoriesData.find((category) => category.id === id);

  if (!category) {
    return "Category Not Found!";
  }

  return category;
};
