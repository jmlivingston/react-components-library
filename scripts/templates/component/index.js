const path = require('path')

const basePath = path.join(__dirname, '../../../src/ui') // TODO: Add option to use core,  to

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What is the name?',
      default: 'FooBar'
    }
  ],
  actions: () => {
    const baseName = path.join(basePath, '{{pascalCase componentName}}/{{pascalCase componentName}}')
    const templateBaseName = './component/component'
    const fileExtensions = ['js', 'test.js', 'module.scss', 'stories.js']

    const actions = [
      ...fileExtensions.map(fileExtension => ({
        type: 'add',
        force: true,
        path: `${baseName}.${fileExtension}`,
        templateFile: `${templateBaseName}.${fileExtension}.hbs`,
        abortOnFail: true
      })),
      {
        type: 'prettify',
        path: path.join(basePath, '{{pascalCase name}}')
      }
    ]

    return actions
  }
}
