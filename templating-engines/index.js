const { getRates } = require("./services/getRates");
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  const rate = await getRates("HKD", "INR");
  await res.send({ rate });
});

app.listen(5000, () => {
  console.log(`Listening on 5000`);
});
