# 一个谷歌浏览器插件工具

配置文件参考

```js
{
  name: "", // 插件名字
  description: "", // 描述
  title: "", // 标题
  matches: [],
  permissions: [],
  default_icon: "favicon.png",
  default_popup: "",
  empty_background: false, // 是否生成空 background
  run_build: true,
  template_manifest: false,
  outDir: "./chrome", // 打包目录
  assets_dir: "./assets", // content_script 包含的文件所在目录
  rm_paths: [ // 需要删除的文件
    "./chrome/assets",
    "./chrome/favicon.png",
    "./chrome/index.html"
  ],
  mv_paths: [ // 需要移动的文件
    "./dist/assets",
    "./dist/favicon.png",
    "./dist/index.html"
  ]
}
```

## 使用手册

1. 首次使用先运行`npx cec -i/--init` 会在根目录生成 `cec.cjs` 文件作为配置文件入口
2. 然后按照需求修改`cec.cjs`
3. 运行`npx cec -b/--build` 进行打包
4. 使用`npx cec -h/--help` 查看帮助文档
