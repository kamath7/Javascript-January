const { getRates, getListOfCurrencies } = require("./services/getRates");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// app.get("/", async (req, res) => {
//   const rate = await getRates("HKD", "INR");
//   await res.send({ rate });
// });
app.use(bodyParser.json());
app.set(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/currency", async (req, res) => {
  const listofcurrencies = await getListOfCurrencies();
  await res.render("home", {
    name: "Kams!",
    currencies: listofcurrencies,
    amount: "",
  });
});

app.post("/currency/getExchange", async (req, res) => {
  console.log(req.body);
  const listofcurrencies = await getListOfCurrencies();

  res.render("home", {
    name: "Kams!",
    currencies: listofcurrencies,
    amount: req.body.amount,
  });
});

app.listen(5000, () => {
  console.log(`Listening on 5000`);
});
