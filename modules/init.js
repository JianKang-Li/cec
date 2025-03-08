const fs = require('node:fs')
const path = require('node:path')
const Utils = require('../utils')

function init () {
  const filePath = path.join(process.cwd(), './cec.json')
  const configFile = path.join(__dirname, '../config/cec.json')

  if (Utils.isExtend(filePath)) {
    console.log('cec.json文件已存在！')
  } else {
    fs.copyFileSync(configFile, filePath)
  }
}

module.exports = init
