const express = require("express");
const router = express.Router();

let iconpath = __dirname + `/api/icons`
router.use(express.static(iconpath))

module.exports = router;