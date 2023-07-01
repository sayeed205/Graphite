const fs = require("fs")
const path = require("path")

const declareFile = path.resolve(__dirname, "./src/index.d.ts")
const data = fs.readFileSync(declareFile, "utf-8")
fs.writeFileSync("./dist/index.d.ts", data, "utf-8")