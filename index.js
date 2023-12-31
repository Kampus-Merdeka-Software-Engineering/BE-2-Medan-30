import express from "express";
import cors from "cors";
import routers from "./src/routers.js";
import { sequelize } from "./src/modules/database.js";

const app = express();
const port = process.env.PORT || 3300;

app.use(
  cors({
    origin: "https://kampus-merdeka-software-engineering.github.io",
  })
);

app.use(express.json());

routers.forEach(({ path, method, handler }) => {
  app[method](path, handler);
});

app.listen(port, "0.0.0.0", async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Example app listening on port ${port}`);
});
