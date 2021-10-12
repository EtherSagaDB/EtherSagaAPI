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

const search = require("./routes/search");
router.use("/search", search);
const icons = require("./icons");
router.use("/icons", icons);

router.get("/:list", (req, res) => {
  if (!fs.existsSync(__dirname + `/json/${req.params.list}.json`)) {
    console.log(`/${req.params.list} does not exist.`)
    res.status(404)
    res.json({ Code: 404 })
  } else {
    let file = fs.readFileSync(__dirname + `/json/${req.params.list}.json`);
    let data = JSON.parse(file);
    let dataLength = data.length;
    let payload = {
      ResultsTotal: dataLength,
      Results: data,
    };
    res.json(payload);
  }
});

router.get("/:list/:id", (req, res) => {
  if (!fs.existsSync(__dirname + `/json/${req.params.list}.json`)) {
    console.log(`/${req.params.list}/${req.params.id} does not exist.`)
    res.status(404)
    res.json({ Code: 404 })
  } else {
    let file = fs.readFileSync(__dirname + `/json/${req.params.list}.json`);
    let data = JSON.parse(file);
    let result = data.find((x) => x.ID === req.params.id);
    if (result === undefined) {
      console.log(`/${req.params.list}/${req.params.id} does not exist.`)
      res.status(404)
      res.json({ Code: 404 })
    } else {
      res.json(result);
    }
  }
});

router.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  res.json({ Code: 404 });
  next(err);
});

module.exports = router;
