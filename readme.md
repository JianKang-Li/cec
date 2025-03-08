# 一个谷歌浏览器插件工具

配置文件参考

```json
{
  "name": "", // 插件名字
  "description": "", // 描述
  "title": "", // 标题
  "matches": [],
  "permissions": [],
  "default_icon": "favicon.png",
  "default_popup": "",
  "empty_background": false, // 是否生成空 background
  "run_build": true,
  "template_manifest": false,
  "outDir": "./chrome", // 打包目录
  "assets_dir": "./assets", // content_script 包含的文件所在目录
  "rm_paths": [ // 需要删除的文件
    "./chrome/assets",
    "./chrome/favicon.png",
    "./chrome/index.html"
  ],
  "mv_paths": [ // 需要移动的文件
    "./dist/assets",
    "./dist/favicon.png",
    "./dist/index.html"
  ]
}
```
