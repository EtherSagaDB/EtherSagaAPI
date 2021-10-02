const express = require("express");
const router = express.Router();
const fs = require("fs");
const fuzzysearch = require("fuzzy-search");

let noString = {
  Error: "No search string found.",
};

router.get("/", (req, res) => {
  // Return if no search string is provided
  if (!req.query.string) {
    res.json(noString);
  }
  let index = req.query.index;
  if (!req.query.index) {
    index = index =
      "aihelper,aircraft,books,camrecorder,changerecover,changeshape,couplejumpto,destroying,doubleexp,droptable,equipment,equipmentupgrade,estone,fireworks,fruit,garden,garden2,gardenfunc,gardentool,hatcher,lottery,luckyroll,material,medicine,mergerecipe,mine,monster,petarmor,petbadge,petfood,petmerge,petproduce,petskill,pstone,reciperoll,refineticket,revivescroll,rune,seed,skill,skillmatter,speaker,specialspeaker,sstone,taskdice,taskmatter,tasknormalmatter,townscroll,transmitroll,vehicleessence";
  }

  let limit = req.query.limit;

  let searchKey = req.query.string;
  let indexes = index.split(",");
  let data = [];
  let payload;
  async function returnSearch() {
    for (let index of indexes) {
      let indexPath = __dirname + "/../search/" + index + ".json";
      let file = JSON.parse(fs.readFileSync(indexPath, { encoding: "utf-8" }));
      let searcher = new fuzzysearch(file, ["name"], { sort: true });
      let result = searcher.search(searchKey);
      for (let item of result) {
        item.index = index;
        console.log(item)
        data.push(item);
      }
      // Search the current results set to sort all indexes together. Hella redundant but I am dumb.
      let sortSearch = new fuzzysearch(data, ["name"], { sort: true });
      let sortResult = sortSearch.search(searchKey);
      payload = {
        ResultsTotal: 0,
        Results: sortResult,
      };
    }
    if (limit && limit <= payload.Results.length) {
      payload.Results.length = limit;
    }
    let dataLength = payload.Results.length;
    payload.ResultsTotal = dataLength;
    res.json(payload);
  }
  returnSearch();
});

module.exports = router;
