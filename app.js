// app file
const express = require("express");
const { getViews, postView } = require("./controllers/views-controllers");
const { invalidPathError } = require("./controllers/error-controllers");
const { getEndpoints } = require("./controllers/endpoints-controllers");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/api/views", getViews);
app.get("/api", getEndpoints);
app.post("/api/views", postView);

app.all(`/*`, invalidPathError);
module.exports = app;
