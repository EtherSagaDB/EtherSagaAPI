const express = require("express");
const router = express.Router();

const rateLimit = "20";

let iconpath = __dirname + `/api/icons`
console.log(iconpath)
router.use(express.static(iconpath))

module.exports = router;