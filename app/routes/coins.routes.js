module.exports = (app) => {
  const coins_markets = require("../controllers/coins/coins.market.controller");
  const baseUrl = "/api/coins";

  /* var router = require("express").Router();
   * app.use('/api/tutorials', router);
   * This is not working for some reason.
   */

  //Get all coins markets
  app.get(baseUrl + "/markets", coins_markets.getCoinsMarkets);
};
