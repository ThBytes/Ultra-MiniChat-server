const express = require("express");
const dotEnv = require("dotenv");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

//! Load Config
dotEnv.config({ path: "./config/config.env" });

const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
