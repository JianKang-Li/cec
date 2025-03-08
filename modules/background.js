const fs = require('fs')
const path = require('path')

/**
 * @function buildBackgroundJS
 * @params {object} params [path]
*/
function buildBackgroundJS (params) {
  const filePath = params.path || path.join(process.cwd(), './cec/background.js')

  fs.writeFileSync(filePath, '')
}

module.exports = buildBackgroundJS
