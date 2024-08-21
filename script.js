const fs = require("fs");
const path = require("path");

const components = path.resolve(__dirname, "src/components");

const folders = fs.readdirSync(components);

const obj = {};

folders.forEach((it) => {
  obj[`./components/${it}`] = {
    import: `./dist/components/${it}/index.js`,
    types: `./dist/components/${it}/index.d.ts`,
  };
});

const temp = path.resolve(__dirname, "temp.json");

fs.writeFileSync(temp, JSON.stringify(obj), "utf-8");
