import fs from 'fs'
import _camelCase from 'lodash/camelCase.js'
import path from 'path'
import process from 'process'
import { __dirname } from '../utils.mjs'
import componentTemplate from './templates/component.mjs'
import scssTemplate from './templates/component.scss.mjs'
import specTemplate from './templates/component.spec.mjs'
import storiesTemplate from './templates/component.stories.mjs'

let args = process.argv
  .filter(arg => arg.includes('='))
  .reduce((acc, value) => ({ ...acc, [value.split('=')[0]]: value.split('=')[1] }), {})

if (!args.name) {
  console.log('WARNING: name argument required. Example: npm run create-component -- name=Test')
} else {
  // Normalize casing
  args.name = args.name[0].toUpperCase() + args.name.slice(1)
  args.dir = args.dir || _camelCase(args.name)
  args.isEmpty = args.isEmpty || false
  args.content = `TODO: ${args.name}`

  const component = componentTemplate(args)
  const scss = scssTemplate(args)
  const spec = specTemplate(args)
  const stories = storiesTemplate(args)

  const basePath = path.join(__dirname, `../src/components/${_camelCase(args.name)}/`)
  const componentPath = path.join(`${basePath}${args.name}.js`)
  const scssPath = path.join(`${basePath}${args.name}.scss`)
  const specPath = path.join(`${basePath}${args.name}.spec.js`)
  const storiesPath = path.join(`${basePath}${args.name}.stories.js`)

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(componentPath.replace(path.basename(componentPath), ''))
  }

  fs.writeFileSync(componentPath, component)
  fs.writeFileSync(scssPath, scss)
  fs.writeFileSync(specPath, spec)
  fs.writeFileSync(storiesPath, stories)
}
