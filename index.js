import express from "express";
import http from "http";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const server = http.createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname,'index.html'));
});

app.listen(3000, () => {
  console.log("The server is listening at port 3000");
});
