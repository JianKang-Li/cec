const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')
const Utils = require('./utils')
const buildManiFest = require('./modules/manifest.js')
const buildBackgroundJS = require('./modules/background.js')
const information = require('./information.js')
const init = require('./modules/init.js')
let configs = {}

function build () {
  execSync('npm run build')

  console.log('打包完成')
}

function rmFiles () {
  const paths = configs.rm_paths

  paths.forEach((item) => {
    try {
      fs.rmSync(item, { recursive: true }) // 递归删除文件夹及其内容
    } catch (e) {
      console.log(e)
    }
    console.log(`删除${item}`)
  })
}

function mvFiles () {
  const paths = configs.mv_paths

  paths.forEach((item) => {
    try {
      fs.renameSync(item, path.join(process.cwd(), configs.outDir, ...item.split('/').slice(-1)))
    } catch (e) {
      console.log(e)
      return
    }
    console.log(`移动${item}成功`)
  })
}

function check () {
  if (Utils.isExtend(path.join(process.cwd(), 'cec.cjs'))) {
    return true
  }
  console.log('请先运行`npx cec -i`初始化！')
  return false
}

function buildChrome () {
  if (!check()) return
  const dirPath = path.join(process.cwd(),configs.outDir)

  Utils.isDirExtend(configs.outDir)
  if (configs.run_build) {
    console.log('开始运行`npm run build`')
    build()
    console.log('打包命令运行完成')
  }

  console.log('开始删除上次打包文件')
  rmFiles()
  console.log('删除上次打包文件完成')
  console.log('开始移动打包文件')
  mvFiles()
  console.log('移动打包文件完成')

  if (configs.empty_background) {
    console.log('开始生成 background.js')
    buildBackgroundJS({
      path: path.join(dirPath, './background.js')
    })
    console.log('生成 background.js 完成')
  }

  if (configs.template_manifest) {
    console.log('开始生成 manifest.json')
    buildManiFest({
      name: configs.name,
      description: configs.description,
      title: configs.title,
      default_icon: configs.default_icon,
      default_popup: configs.default_popup,
      version: configs.version,
      matches: configs.matches,
      path: path.join(dirPath, './manifest.json'),
      dir: path.join(dirPath, configs.assets_dir)
    })
    console.log('生成 manifest.json 完成')
  }
}

function start (args) {
  const command = args[0]

  switch (command) {
    case '--version':
    case '-v': {
      console.log(information.version)
      break
    }
    case '--help':
    case '-h': {
      console.log(information.help)
      break
    }
    case '--build':
    case '-b': {
      configs = require(path.join(process.cwd(), 'cec.cjs'))
      buildChrome()
      break
    }
    case '--init':
    case '-i': {
      init()
    }
  }
}


module.exports = start
