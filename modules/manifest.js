const fs = require('fs')
const path = require('path')

/**
 * @function buildMainFest
 * @params {object} params [name, description, title, path]
*/
function buildManiFest (params = {}) {
  const name = params.name || ''
  const description = params.description || ''
  const title = params.title || ''
  const filePath = params.path || path.join(process.cwd(), './cec/manifest.json')
  const jsNames = params.dir ? fs.readdirSync(params.dir).filter((item => item.endsWith('.js'))) : []
  const cssNames = params.dir ? fs.readdirSync(params.dir).filter((item => item.endsWith('.css'))) : []
  const favicon = params.default_icon || ''

  const template =
    `{
  "manifest_version": 3,
  "name": "${name}",
  "version": "${params.version || ''}",
  "description": "${description}",
  "action": {
    "default_icon": "${favicon}",
    "default_title": "${title}",
    "default_pop": "${params.default_popup || ''}"
  },
  "icons": {
    "128": "${favicon}",
    "48": "${favicon}",
    "16": "${favicon}"
  },
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "content_scripts": [
    {
      "matches": [${params.matches.map(item => `"${item}"`)}],
      "type": "module",
      "js": [
        ${jsNames.map(js => `"/assets/${js}" `)}
      ],
      "css": [
        ${cssNames.map(css => ` "/assets/${css}"`)}
      ]
    }
  ],
  "permissions": [${params.permissions?.map(item => `"${item}"`) || ''}]
}
`

  fs.writeFileSync(filePath, template)
}

module.exports = buildManiFest
