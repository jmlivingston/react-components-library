import fs from 'fs'
import path from 'path'

// type - file, folder, both
const getFilesFolders = (dir, isRecursive = true, type = 'file') =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    let fileFolder = []
    switch (type) {
      case 'file':
        fileFolder = isDirectory ? [] : [name]
        break
      case 'folder':
        fileFolder = isDirectory ? [name] : []
        break
      default:
        fileFolder = [name]
        break
    }
    const fileFolders = isRecursive && isDirectory ? getFilesFolders(name, isRecursive, type) : []
    return [...files, ...fileFolder, ...fileFolders]
  }, [])

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export { getFilesFolders, __dirname }
