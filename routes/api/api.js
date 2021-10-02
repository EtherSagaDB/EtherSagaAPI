const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const limiter = rateLimit({
  winmdowMs: 1 * 60 * 1000,
  max: 1200,
});

router.use(limiter);
router.use(cors());

const fs = require("fs");

router.get("/:list", (req, res) => {
  let file = fs.readFileSync(__dirname + `/json/${req.params.list}.json`);
  let data = JSON.parse(file);
  let dataLength = data.length;
  let payload = {
    ResultsTotal: dataLength,
    Results: data,
  };
  res.json(payload);
});

router.get("/:list/:id", (req, res) => {
  let file = fs.readFileSync(__dirname + `/json/${req.params.list}.json`);
  let data = JSON.parse(file);
  let result = data.find((x) => x.ID === req.params.id);
  res.json(result);
});

const search = require("./routes/search");
router.use("/search", search);

router.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  res.json({ Code: 404 });
  next(err);
});

module.exports = router;
