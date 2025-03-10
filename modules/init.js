const fs = require('node:fs')
const path = require('node:path')
const Utils = require('../utils')

function init () {
  const filePath = path.join(process.cwd(), './cec.cjs')
  const configFile = path.join(__dirname, '../config/cec.cjs')

  if (Utils.isExtend(filePath)) {
    console.log('cec.cjs文件已存在！')
  } else {
    fs.copyFileSync(configFile, filePath)
  }
}

module.exports = init
