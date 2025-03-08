const fs = require('fs')
const path = require('path')


function isDirExtend (dirPath) {
  const folderPath = path.join(process.cwd(), dirPath)

  // 检查文件夹是否存在
  if (!fs.existsSync(folderPath)) {
    // 文件夹不存在，创建文件夹
    try {
      fs.mkdirSync(folderPath, { recursive: true })
      console.log('文件夹已创建:', folderPath)
    } catch (err) {
      console.error('创建文件夹失败:', err)
    }
  }
}

function isExtend (FilePath) {
  const Path = path.join(FilePath)

  // 检查文件夹是否存在
  if (!fs.existsSync(Path)) {
    // 文件夹不存在，创建文件夹
    return false
  } else {
    // 文件夹存在
    return true
  }
}

module.exports = {
  isDirExtend,
  isExtend
}
