import fs from 'fs'
import path from 'path'
import { getFilesFolders, __dirname } from './utils.mjs'

function buildIndexFile() {
  const warning =
    '// WARNING: This file gets overwritten during build. Update or remove prebuild script to change.\r\n\r\n'
  const exportLines =
    getFilesFolders(path.join(__dirname, '../src'))
      .filter(file => {
        // File must be .js, Pascal cased, and not spec.js or stories.js
        const fileName = path.basename(file)
        const isCapitalized = fileName[0] === fileName[0].toUpperCase()
        return isCapitalized && file.includes('.js') && (!file.includes('.spec.js') && !file.includes('.stories.js'))
      })
      .map(file => {
        const componentName = path.basename(file).replace('.js', '')
        const exportFile = `export { default as ${componentName} } from '.${file
          .replace(path.join(__dirname, '../src'), '')
          .replace('.js', '')}'`

        return exportFile
      })
      .join('\r\n') + '\r\n'
  fs.writeFileSync(path.join(__dirname, '../src/index.js'), warning + exportLines)
}

buildIndexFile()
