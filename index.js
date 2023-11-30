import express from "express";
import cors from "cors";
import router from "./router.js";
import { sequelize } from "./src/modules/database.js";

const app = express();
const port = process.env.PORT || 3300;

app.use(cors());
app.use(express.json());

router.forEach(({ path, method, handler }) => {
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
