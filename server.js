import express from "express";
import { data } from "./data.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Define a simple route
app.get("/api/products", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
