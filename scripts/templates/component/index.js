const path = require('path')
const componentExists = require('../utils/componentExists')

const basePath = path.join(__dirname, '../../src/ui')

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Test',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component with this name already exists' : true
        }
        return 'The name is required'
      }
    }
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: path.join(basePath, '{{pascalCase name}}/{{pascalCase name}}.js'),
        templateFile: './component/index.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: path.join(basePath, '{{pascalCase name}}/{{pascalCase name}}'),
        templateFile: './component/test.js.hbs',
        abortOnFail: true
      },
      {
        type: 'prettify',
        path: path.join(basePath, '{{pascalCase name}}')
      }
    ]

    return actions
  }
}
