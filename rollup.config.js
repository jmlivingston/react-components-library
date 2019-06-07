import path from 'path'
import rimraf from 'rimraf'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { getFilesFolders } from './scripts/utils.mjs'

rimraf.sync(path.join(__dirname, 'dist'))

const fileFilter = file => {
  return (
    file.includes('.js') &&
    !file.includes('.css') &&
    !file.includes('.mock.js') &&
    !file.includes('.spec.js') &&
    !file.includes('.stories.js')
  )
}

const files = getFilesFolders(path.join(__dirname, 'src')).filter(fileFilter)

const getOutputs = ({ file }) => {
  const dirName = path.dirname(file)

  const shouldUseIndex = () => {
    // Allows import Foo from 'ui/Foo' instead of import Foo from 'ui/Foo/Foo'
    const dirFiles = getFilesFolders(path.join(dirName))
      .filter(fileFilter)
      .filter(dirFile => dirFile !== file && !file.includes('index.js'))
    return dirFiles.length === 0
  }

  return ['cjs', 'es'].map(format => ({
    file: shouldUseIndex()
      ? dirName.replace('src/', `dist/${format}/`) + '/index.js'
      : file.replace('src/', `dist/${format}/`),
    format,
    exports: 'named'
  }))
}

export default files.map(file => ({
  input: file,
  output: getOutputs({ file }),
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    babel({
      exclude: '/node_modules/**'
    }),
    commonjs(),
    postcss({
      modules: true
    }),
    resolve(),
    terser()
  ]
}))
