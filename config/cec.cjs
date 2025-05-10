const configs = {
  name: "",
  description: "",
  title: "",
  matches: [],
  permissions: [],
  default_icon: "favicon.png",
  default_popup: "",
  empty_background: false,
  need_move_files: [
    "../dist/assets",
    "../dist/favicon.png",
    "../dist/index.html"
  ],
  run_build: true,
  template_manifest: false,
  outDir: "./chrome",
  assets_dir: "./assets",
  rm_paths: [
    "./chrome/assets",
    "./chrome/favicon.png",
    "./chrome/index.html"
  ],
  mv_paths: [
    "./dist/assets",
    "./dist/favicon.png",
    "./dist/index.html"
  ]
}

module.exports = configs
