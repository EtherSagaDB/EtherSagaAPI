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

// API Routes
const aihelper = require("./routes/aihelper");
router.use("/aihelper", aihelper);

const aircraft = require("./routes/aircraft");
router.use("/aircraft", aircraft);

const books = require("./routes/books");
router.use("/books", books);

const camrecorder = require("./routes/camrecorder");
router.use("/camrecorder", camrecorder);

const changerecover = require("./routes/changerecover");
router.use("/changerecover", changerecover);

const changeshape = require("./routes/changeshape");
router.use("/changeshape", changeshape);

const content = require("./routes/content");
router.use("/content", content);

const couplejumpto = require("./routes/couplejumpto");
router.use("/couplejumpto", couplejumpto);

const destroying = require("./routes/destroying");
router.use("/destroying", destroying);

const doubleexp = require("./routes/doubleexp");
router.use("/doubleexp", doubleexp);

const droptable = require("./routes/droptable");
router.use("/droptable", droptable);

const equipment = require("./routes/equipment");
router.use("/equipment", equipment);

const equipmentupgrade = require("./routes/equipmentupgrade");
router.use("/equipmentupgrade", equipmentupgrade);

const estone = require("./routes/estone");
router.use("/estone", estone);

const fireworks = require("./routes/fireworks");
router.use("/fireworks", fireworks);

const fruits = require("./routes/fruits");
router.use("/fruits", fruits);

const gardenornaments = require("./routes/gardenornaments");
router.use("/gardenornaments", gardenornaments);

const gardens = require("./routes/gardens");
router.use("/gardens", gardens);

const gardenfunction = require("./routes/gardenfunction");
router.use("/gardenfunction", gardenfunction);

const gardentools = require("./routes/gardentools");
router.use("/gardentools", gardentools);

const hatchers = require("./routes/hatchers");
router.use("/hatchers", hatchers);

const lottery = require("./routes/lottery");
router.use("/lottery", lottery);

const luckyscroll = require("./routes/luckyscroll");
router.use("/luckyscroll", luckyscroll);

const material = require("./routes/material");
router.use("/material", material);

const mergerecipe = require("./routes/mergerecipe");
router.use("/mergerecipe", mergerecipe);

const mine = require("./routes/mine");
router.use("/mine", mine);

const monster = require("./routes/monster");
router.use("/monster", monster);

const petarmor = require("./routes/petarmor");
router.use("/petarmor", petarmor);

const petbadge = require("./routes/petbadge");
router.use("/petbadge", petbadge);

const petfood = require("./routes/petfood");
router.use("/petfood", petfood);

const petmerge = require("./routes/petmerge");
router.use("/petmerge", petmerge);

const petproduction = require("./routes/petproduction");
router.use("/petproduction", petproduction);

const petskills = require("./routes/petskills");
router.use("/petskills", petskills);

const potion = require("./routes/potion");
router.use("/potion", potion);

const pstone = require("./routes/pstone");
router.use("/pstone", pstone);

const reciperoll = require("./routes/reciperoll");
router.use("/reciperoll", reciperoll);

const refineticket = require("./routes/refineticket");
router.use("/refineticket", refineticket);

const revivescroll = require("./routes/revivescroll");
router.use("/revivescroll", revivescroll);

const runes = require("./routes/runes");
router.use("/runes", runes);

const search = require("./routes/search");
router.use("/search", search);

const seeds = require("./routes/seeds");
router.use("/seeds", seeds);

const skill = require("./routes/skill");
router.use("/skill", skill);

const skillmatter = require("./routes/skillmatter");
router.use("/skillmatter", skillmatter);

const speaker = require("./routes/speaker");
router.use("/speaker", speaker);

const specialspeakers = require("./routes/specialspeakers");
router.use("/specialspeakers", specialspeakers);

const sstone = require("./routes/sstone");
router.use("/sstone", sstone);

const taskdice = require("./routes/taskdice");
router.use("/taskdice", taskdice);

const taskitems = require("./routes/taskitems");
router.use("/taskitems", taskitems);

const tasknormalmatter = require("./routes/tasknormalmatter");
router.use("/tasknormalmatter", tasknormalmatter);

const teleportscroll = require("./routes/teleportscroll");
router.use("/teleportscroll", teleportscroll);

const townscroll = require("./routes/townscroll");
router.use("/townscroll", townscroll);

const vehicle = require("./routes/vehicle");
router.use("/vehicle", vehicle);

router.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  res.json({ Code: 404 });
  next(err);
});

module.exports = router;
