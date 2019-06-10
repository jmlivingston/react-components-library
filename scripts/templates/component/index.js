const path = require('path')

const basePath = path.join(__dirname, '../../../src/ui')

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'FooBar'
    }
  ],
  actions: () => {
    const baseName = path.join(basePath, '{{pascalCase name}}/{{pascalCase name}}')
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
