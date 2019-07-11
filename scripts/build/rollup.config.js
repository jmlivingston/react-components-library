import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import autoExternal from 'rollup-plugin-auto-external'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import packageJson from '../../package.json'
import { getFilesFolders } from '../utils'

const distDirectory = path.join(__dirname, '../../dist')
const srcDirectory = path.join(__dirname, '../../src')
const buildFormats = ['cjs', 'es'] // include others if needed

function cleanDist() {
  rimraf.sync(distDirectory)
  fs.mkdirSync(distDirectory)
}

function createReadmePackageJson() {
  fs.copyFileSync(path.join(__dirname, 'README_PACKAGE.md'), path.join(distDirectory, 'README.md'))
  fs.writeFileSync(
    path.join(distDirectory, 'package.json'),
    JSON.stringify(
      {
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version,
        author: packageJson.author,
        license: packageJson.license,
        repository: packageJson.repository,
        keywords: packageJson.keywords,
        dependencies: packageJson.dependencies,
        peerDependencies: packageJson.peerDependencies
      },
      null,
      2
    )
  )
}

function getOutputs({ file }) {
  const fileDirectory = path.dirname(file)
  const fileDirectoryParent = path.dirname(path.dirname(file))
  const fileBaseName = path.basename(file)

  const shouldUseIndex = () => {
    return (
      !fs.existsSync(path.join(fileDirectory, 'index.js')) &&
      fileBaseName.replace(path.extname(fileBaseName), '') === fileDirectory.replace(fileDirectoryParent, '').slice(1)
    )
  }

  return buildFormats.map(format => {
    const fileDistDirectory = fileDirectory.replace('src', 'dist').replace(distDirectory, '')
    const output = {
      file: shouldUseIndex()
        ? path.join(distDirectory, format, fileDistDirectory, 'index.js')
        : path.join(distDirectory, format, fileDistDirectory, fileBaseName),
      format,
      exports: 'named'
    }
    return output
  })
}

cleanDist()

createReadmePackageJson()

export default getFilesFolders(srcDirectory)
  .filter(
    file =>
      file.includes('.js') &&
      !file.includes('examples') &&
      !file.includes('.mock.js') &&
      !file.includes('.test.js') &&
      !file.includes('.stories.js')
  )
  .map(file => ({
    input: file,
    output: getOutputs({ file }),
    plugins: [
      autoExternal(),
      babel({
        exclude: '/node_modules/**'
      }),
      commonjs(),

      postcss({
        modules: fs.existsSync(file.replace('.js', '.module.scss')) || fs.existsSync(file.replace('.js', '.module.css'))
      }),
      terser()
    ]
  }))
