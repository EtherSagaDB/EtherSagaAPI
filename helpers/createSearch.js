const fs = require("fs");

const walk = function (dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + "/" + file;
    file_type = file.split(".").pop();
    file_name = file.split(/(\\|\/)/g).pop();
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file_type == "json") results.push(file);
    }
  });
  return results;
};

async function createSearch() {
  console.log("Creating search index...");
  let path = __dirname + "/../routes/api/json";
  let jsonArray = await walk(path);
  for (const endpoint of jsonArray) {
    let searchFile = endpoint.substring(endpoint.lastIndexOf("/") + 1);
    let data = await fs.readFileSync(endpoint, { encoding: "utf-8" });
    let searchArray = [];
    for (const item of JSON.parse(data)) {
      let searchItem = {
        name: item.Name,
        ID: item.ID,
        icon: item.file_icon
      };
      searchArray.push(searchItem);
    }
    let searchData = JSON.stringify(searchArray);
    let savePath = __dirname + "/../routes/api/search/" + searchFile;
    // make search folder if it doesn't exist
    if (!fs.existsSync(__dirname + "/../routes/api/search/")) {
      fs.mkdirSync(__dirname + "/../routes/api/search/");
    }
    fs.writeFileSync(savePath, searchData);
  }
  return console.log("Search Generated!");
}

module.exports = createSearch;
