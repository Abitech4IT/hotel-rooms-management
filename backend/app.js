const express = require("express");
const cors = require("cors");
const roomRouter = require("./routes/roomRouter");
const app = express();

app.use(express.json());

app.use(cors({ origin: "*", credentials: true }));

app.use("/api/v1/rooms", roomRouter);

module.exports = app;
