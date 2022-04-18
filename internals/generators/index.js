/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const componentGenerator = require("./component/index.js");
const pageGenerator = require("./page/index.js");

module.exports = (plop) => {
  plop.setGenerator("page", pageGenerator);
  plop.setGenerator("component", componentGenerator);
  plop.addHelper("directory", (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../src/pages/${comp}`), fs.F_OK);
      return `pages/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
  plop.setActionType("prettify", (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      "/../../src/",
      config.path,
      plop.getHelper("properCase")(answers.name),
      "**.ts"
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
