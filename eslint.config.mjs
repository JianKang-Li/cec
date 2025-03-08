import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  { "ignores": ['babel.config.js', 'eslint.config.mjs', 'dist/*'] },
  {
    files: ["**/*.{js,cjs}"],
    rules: {
      "eol-last": 'error',//文件以单一的换行符结束
      "no-unused-vars": "error",
      "no-trailing-spaces": 'error',//一行结束后面不要有空格
      "eqeqeq": "error", // 三等号
      'no-multiple-empty-lines': 'error',
      'semi': ['error', 'never'], // 分号
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] }
      ], // 定义后空行
      "comma-dangle": ["error", "never"], // 逗号
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }], // 导入排序
      "block-spacing": ['error', 'always'],
      "space-before-blocks": ["error", 'always'],
      'semi-spacing': ['error', { after: true, before: false }],
      "space-before-function-paren": ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      indent: ['error', 2, {
        ArrayExpression: 1,
        CallExpression: { arguments: 1 },
        FunctionDeclaration: { parameters: 'first' },
        ImportDeclaration: 'first',
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1
      }],
    }
  },
  {
    files: ['**/*.cjs'],
    rules:{
      "no-undef": 'off'
    }
  }
]
