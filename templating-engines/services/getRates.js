const axios = require("axios");

const getRates = async (base, amt) => {
  const rates = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=${base}`
  );
  const realRates = await rates.data.rates;

  const forexRate = await realRates[amt];
  return await forexRate;
};
const getListOfCurrencies = async () => {
  const rates = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=INR`
  );
  const realRates = await rates.data.rates;
  const listofcurrencies = await Object.keys(realRates);
  return await listofcurrencies;
};

module.exports = { getRates, getListOfCurrencies };
