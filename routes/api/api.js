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

const fruit = require("./routes/fruit");
router.use("/fruit", fruit);

const garden = require("./routes/garden");
router.use("/garden", garden);

// Need to find a better identifier for this sheet
const garden2 = require("./routes/garden2");
router.use("/garden2", garden2);

const gardenfunc = require("./routes/gardenfunc");
router.use("/gardenfunc", gardenfunc);

const gardentool = require("./routes/gardentool");
router.use("/gardentool", gardentool);

const hatcher = require("./routes/hatcher");
router.use("/hatcher", hatcher);

const lottery = require("./routes/lottery");
router.use("/lottery", lottery);

const luckyroll = require("./routes/luckyroll");
router.use("/luckyroll", luckyroll);

const material = require("./routes/material");
router.use("/material", material);

const medicine = require("./routes/medicine");
router.use("/medicine", medicine);

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

const pstone = require("./routes/pstone");
router.use("/pstone", pstone);

const reciperoll = require("./routes/reciperoll");
router.use("/reciperoll", reciperoll);

const refineticket = require("./routes/refineticket");
router.use("/refineticket", refineticket);

const revivescroll = require("./routes/revivescroll");
router.use("/revivescroll", revivescroll);

const rune = require("./routes/rune");
router.use("/rune", rune);

const search = require("./routes/search");
router.use("/search", search);

const seed = require("./routes/seed");
router.use("/seed", seed);

const skill = require("./routes/skill");
router.use("/skill", skill);

const skillmatter = require("./routes/skillmatter");
router.use("/skillmatter", skillmatter);

const speaker = require("./routes/speaker");
router.use("/speaker", speaker);

const specialspeaker = require("./routes/specialspeaker");
router.use("/specialspeaker", specialspeaker);

const sstone = require("./routes/sstone");
router.use("/sstone", sstone);

const taskdice = require("./routes/taskdice");
router.use("/taskdice", taskdice);

const taskmatter = require("./routes/taskmatter");
router.use("/taskmatter", taskmatter);

const tasknormalmatter = require("./routes/tasknormalmatter");
router.use("/tasknormalmatter", tasknormalmatter);

const townscroll = require("./routes/townscroll");
router.use("/townscroll", townscroll);

const transmitroll = require("./routes/transmitroll");
router.use("/transmitroll", transmitroll);

const vehicleessence = require("./routes/vehicleessence");
router.use("/vehicleessence", vehicleessence);

router.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404;
  res.json({Code: 404})
  next(err)
})

module.exports = router;
