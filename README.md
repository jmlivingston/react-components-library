# jl-react-components-library

## Summary

This is a starting point for developing a reusable React component library using [Storybook](https://storybook.js.org) and [Rollup](https://rollupjs.org).

---

## Features

- Develop and debug - [Storybook](https://storybook.js.org)
- Style - supports css, scss, module.css, and module.scss
- Build - [Rollup](https://rollupjs.org)
- Publish - npm
- Document - [Storybook](https://storybook.js.org)
- Test - Jest, @testing-library/react
- Lint - create-react-app
- Formatting - prettier

> Note: For applications, use [create-react-app](https://facebook.github.io/create-react-app) or [Next.js](https://nextjs.org).

---

## Install

`git clone https://jmlivingston.github.io/react-components-library`

`cd react-component-library`

`npm i`

---

## Start

`npm start`

---

## Build

`npm run build`

---

## Publish Package

`npm publish dist`

---

## Publish Documentation

`npm run publish-documentation`

> Note: Defaults to GitHub Pages and assumes git is initialized with a GitHub repository. To remove, delete publish-documentation in package.json scripts and uninstall @storybook/storybook-deployer.

---

## Configuration

- Development - [Storybook](https://storybook.js.org)
- Build - [Rollup](https://rollupjs.org)
- Documentation - [Storybook](https://storybook.js.org)
- Hosting - [GitHub Pages](https://pages.github.com)

---

## Naming

- PascalCase - Component names, component parent folders, and any component related file names (.js, .test.js, .stories.js, .css, .module.css, .scss, .module.scss)
- SNAKE_CASE (upper cased) - constant files and constant variables within.
- kebab-case - class and id names for CSS or SASS.
- camelCase - class and id names for CSS modules or SASS modules. All other functions, variables, and folders.

---

## Folders

This project tries to stay flat as possible, but can be easily changed or extended. All source code is under src. All component related files, including styling, tests, and stories are contained under src/components within a component folder. Storybook configuration is in .storybook by convention and is built under storybook-static. Build is generated under dist.

---

## Lint

These are based on create-react-app with a few extras in package.json under eslintConfig. Husky and lint-staged is used to prevent commits when any lint rules or errors are broken.

---

## Format

Prettier is used and is configured under prettier in package.json. Husky and lint-staged is used to format before commits.

---

## Test

Jest, react-testing-library, and react-hooks-testing-library are used for testing.

---

## Tooling

### Create New Component

To create new components, you can use the following to generate the component, styles, stories, and test. This uses [Plop](https://plopjs.com/) and can be customized under scripts/templates.

`npm run generate`

#### Options

**Required**

- name - Name of component. It will normalize to PascalCase

**Optional**

- dir - defaults to camel casing of name i.e., "blueButton".
- isEmpty - defaults to false. Determines if dummy content is added.
- styleExtension - defaults to module.scss. Other options: css, module.css, scss, and module.scss.
- content - defaults to "TODO " and camel casing of name. Ignored if isEmpty is set to true.

---

## Alternatives

- [nwb](https://github.com/insin/nwb)
- [neutrino](https://neutrinojs.org)
- [create-react-library](https://github.com/transitive-bullshit/create-react-library)

---

## Links

- [Documentation](https://jmlivingston.github.io/react-components-library)
- [GitHub Repository](https://github.com/jmlivingston/react-components-library)
- [npm package](https://www.npmjs.com/package/jl-react-components-library)
- [Sample Project](https://github.com/jmlivingston/react-components-library-example-cra)

---

## TODO

- Storybook bug - shows accessibility errors on CSS Modules.
- Storybook bug - shows accessibility errors on root elements
- Storybook bug - Error in console: The pseudo class ":first-child" is potentially unsafe when doing server-side rendering.

---

## Peer Dependencies Notes

The following come up as warnings, but we don't need to add.

- @emotion/core - Storybook bug - [https://github.com/storybookjs/storybook/issues/5919](https://github.com/storybookjs/storybook/issues/5919)

---
