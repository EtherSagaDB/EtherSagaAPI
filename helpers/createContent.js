const fs = require('fs')

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

async function createContent() {
    let path = __dirname + "/../routes/api/json/"
    let content = walk(path);
    let array = [];
    for (let part of content) {
        let file = part.substring(part.lastIndexOf('/') + 1).replace('.json', '')
        array.push(`/${file}`)
    }
    fs.writeFileSync(path + `content.json`, JSON.stringify(array))
}

module.exports = createContent;