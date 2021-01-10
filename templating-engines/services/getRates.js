const axios = require("axios");

const getRates = async (base, amt) => {
  const rates = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=${base}`
  );
  const realRates = await rates.data.rates;
  const forexRate = await realRates[amt];
  return await forexRate;
};

module.exports = { getRates };
