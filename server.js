import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();
const port = process.env.PORT || 3300;

app.use(cors());

// Register All Routes
Object.entries(router).forEach(([path, service]) => {
  app.get(path, service);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
