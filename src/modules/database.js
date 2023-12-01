import { Sequelize, DataTypes } from "sequelize";
import {} from "dotenv/config";

console.log(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  process.env.DATABASE_HOST
);

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mysql",
  }
);

const News = sequelize.define("News", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  category_id: {
    type: DataTypes.UUID,
    allowNull: false,
    foreignKey: true,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thumbnail_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Categories = sequelize.define("Categories", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Comments = sequelize.define("Comments", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  news_id: {
    type: DataTypes.UUID,
    allowNull: false,
    foreignKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Recommendation = sequelize.define("Recommendations", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  category_id: {
    type: DataTypes.UUID,
    allowNull: false,
    foreignKey: true,
  },
  news_id: {
    type: DataTypes.UUID,
    allowNull: false,
    foreignKey: true,
  },
});

const Trendings = sequelize.define("Trendings", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  news_id: {
    type: DataTypes.UUID,
    allowNull: false,
    foreignKey: true,
  },
  trending_rank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// News & Categories
Categories.hasMany(News, {
  foreignKey: "category_id",
});
News.belongsTo(Categories, {
  foreignKey: "category_id",
  targetKey: "id",
  as: "category",
});

// News & Comments
News.hasMany(Comments, {
  foreignKey: "news_id",
  as: "comments",
});
Comments.belongsTo(News, {
  foreignKey: "news_id",
  targetKey: "id",
  as: "news",
});

// News & Recommendation
News.hasOne(Recommendation, {
  foreignKey: "news_id",
});
Recommendation.belongsTo(News, {
  foreignKey: "news_id",
  targetKey: "id",
});

// // News and Trending
News.hasOne(Trendings, {
  foreignKey: "news_id",
});
Trendings.belongsTo(News, {
  foreignKey: "news_id",
  targetKey: "id",
});

(async () => {
  await sequelize.sync();
})();

export { sequelize, News, Categories, Comments, Recommendation, Trendings };
