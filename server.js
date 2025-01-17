import express from "express";
import cors from "cors";
import { data } from "./data.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Define a simple route
app.get("/api/products", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`get products http://localhost:3000/api/products`);
});
