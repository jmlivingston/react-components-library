const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const componentGenerator = require('./component/index.js')

module.exports = plop => {
  plop.setGenerator('component', componentGenerator)
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../app/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**',
      '**.js'
    )}`
    try {
      execSync(`npm run prettify -- "${folderPath}"`)
      return folderPath
    } catch (err) {
      throw err
    }
  })
}

module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION
