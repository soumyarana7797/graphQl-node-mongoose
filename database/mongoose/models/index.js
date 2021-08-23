const path = require("path")
// const logger = require("../../../lib/core/logger")
const normalizedPath = path.join(__dirname, "./")

module.exports = require("fs")
  .readdirSync(normalizedPath)
  .forEach((fileNameOnly) => {
    if (fileNameOnly !== "index.js") {
      // eslint-disable-next-line
            require(`./${fileNameOnly}`)
    }
  })