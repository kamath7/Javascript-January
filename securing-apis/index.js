require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

import jsonwebtoken from "jsonwebtoken";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//JWT Setup

app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split("")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split("")[1],
      "LalleHaha",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  }else{
    req.user = undefined;
    next();
  }
});

routes(app);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Running lol`);
});
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
