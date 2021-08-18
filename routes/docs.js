const express = require("express");
const router = express.Router();

const rateLimit = "20";

router.get("/", (req, res) => {
  res.render("./docs/index", { rateLimit: rateLimit });
});

router.get("/search", (req, res) => {
  res.render("./docs/search");
});

router.get("/game-data", (req, res) => {
  res.render("./docs/game-data");
});

module.exports = router;
