const axios = require("axios");

exports.getCoinsMarkets = async (req, res) => {
  if (!req.query.vs_currency) {
    return res.status(400).send({
      message:
        "You have to select a currency to get a response for this endpoint.",
    });
  }

  const response = await axios.get(
    process.env.API_URL + `coins/markets?vs_currency=${req.query.vs_currency}`
  );

  return res.json(response.data);
};
