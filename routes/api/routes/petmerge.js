const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const file = fs.readFileSync(__dirname + "/../json/petmerge.json");
  const data = JSON.parse(file);
  const dataLength = data.length;
  const payload = {
    ResultsTotal: dataLength,
    Results: data,
  };
  res.json(payload);
});

module.exports = router;
