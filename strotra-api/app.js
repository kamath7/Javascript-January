require("dotenv").config();
const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected");
});
const strotraRouter = require("./routes/Strotra");
app.use(cors());
app.use(bodyParser.json());
app.use("/strotras", strotraRouter);

// app.get("/", (req, res) => {
//   return res.status(200).send({ message: "Very Good" });
// });
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
