import express from "express";
import cors from "cors";
import { data } from "./data.js";

const app = express();
const PORT = 9080;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`get products http://localhost:${PORT}/api/products`);
});
