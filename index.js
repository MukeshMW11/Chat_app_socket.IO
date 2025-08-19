import express from "express";
import http from "http";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});



io.on('connection',(socket)=>{
console.log('Web Socket connected Successfully.')
socket.on('disconnect',()=>{
    console.log('Sokcet Disconnected.')
})
})

server.listen(3000, () => {
  console.log("The server is listening at port 3000");
});
