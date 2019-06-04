// TODO
import process from 'process'

const args = process.argv
  .filter(arg => arg.includes('='))
  .reduce((acc, value) => ({ ...acc, [value.split('=')[0]]: value.split('=')[1] }), {})

// Based on template create folders with files

console.log(args)
