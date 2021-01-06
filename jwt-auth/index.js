require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const AuthRoute = require("./routes/Auth");
const app = express();

app.use(express.json());
app.use("/api/auth", AuthRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected`))
  .catch((err) => {
    console.log(`Error. The error is ${err}`);
  });
