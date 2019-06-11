# jl-react-components-library

## Summary

This is a starting point for developing a reusable React component library using [Storybook](https://storybook.js.org) and [Rollup](https://rollupjs.org).

---

## Features

- Develop and debug - [Storybook](https://storybook.js.org)
- Style - supports css, scss, module.css, and module.scss
- Build - [Rollup](https://rollupjs.org)
- Publish - [npm](https://www.npmjs.com)
- Document - [Storybook](https://storybook.js.org)
- Test - [Jest](https://jestjs.io), [@testing-library/react](https://testing-library.com)
- Lint - [create-react-app](https://www.npmjs.com/package/eslint-config-react-app)
- Formatting - [prettier](https://prettier.io)

> Note: For applications (as opposed to a "component library"), use [create-react-app](https://facebook.github.io/create-react-app) or [Next.js](https://nextjs.org).

---

## Install

`git clone https://github.com/jmlivingston/react-components-library.git`

`cd react-component-library`

`npm i`

> Note: To make this your own, replace the text "jl-react-components-library" in package.json, README_PACKAGE.md, and README.md files. There is several places where the package.json name property is used.

---

## Start

`npm start`

`npm start:info` - This starts with additional Storybook plugins enabled and is good for testing documentation, but not as good for debugging.

---

## Build

`npm run build`

---

## Styling

This project allows CSS, SASS, CSS Modules, and SASS Modules. If you are importing from node_modules, you will need to prefix with a tilde `~`. SASS Example:

```
@import '~bootstrap/scss/_variables.scss'
```

---

## Publish Package

`npm publish dist`

---

## Publish Documentation

`npm run publish-documentation`

> Note: Defaults to [GitHub Pages](https://pages.github.com) and assumes git is initialized with a GitHub repository. To remove, delete publish-documentation in package.json scripts and uninstall [@storybook/storybook-deployer](https://github.com/storybookjs/storybook-deployer).

---

## Naming

- PascalCase - Component names, component parent folders, and any component related file names (.js, .test.js, .stories.js, .css, .module.css, .scss, .module.scss)
- SNAKE_CASE (upper cased) - constant files and constant variables within.
- kebab-case - class and id names for CSS or SASS.
- camelCase - class and id names for CSS modules or SASS modules. All other functions, variables, and folders.

---

## Folders

This project tries to stay flat as possible, but can be easily changed or extended. All source code is under src. All component related files, including styling, tests, and stories are contained under src/components within a component folder. Storybook configuration is in .storybook by convention and is built under storybook-static. Build is generated under dist.

> Settings - .storybook

---

## Build

Build uses [Rollup](https://rollupjs.org) to generate indepdendent component bundles based on the folder structure under src. Here are a few features:

- All documentation, mock, styles, tests, and stories are filtered out.
- An index is also created for components where they are the only component in the directory. For example: BlueButton/BlueButton becomes BlueButton/index.js in dist.
- The dist package.json is created in rollup.config.js
- The README_PACKAGE.md is copied over to dist as README.md.

> Settings - rollup.config.js, README_PACKAGE.md

---

## Lint

These are based on create-react-app's linting rules, whith a few minor tweaks. Husky and lint-staged is used to prevent commits when any lint rules or errors are broken.

> Settings - package.json (eslintConfig, lint-staged, and husky)

---

## Format

Prettier is used and is configured under prettier in package.json. Husky and lint-staged is used to format before commits.

> Settings - package.json (eslintConfig, lint-staged, and husky)

---

## Test

Jest, [@testing-library/react](https://testing-library.com), and [react-hooks-testing-library](https://github.com/mpeyper/react-hooks-testing-library) are used for testing.

> Settings package.json (jest)

---

## Tooling

### Create New Component

To create new components, you can use the following to generate the component, styles, stories, and test. This feature utilizes [Plop](https://plopjs.com/).

`npm run generate`

> Settings - scripts/templates

---

## Alternatives tools for component libraries

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

Storybook bugs

- Storybook bug - shows accessibility errors on CSS Modules.
- Storybook bug - shows accessibility errors on root elements
- Storybook bug - Error in console: The pseudo class ":first-child" is potentially unsafe when doing server-side rendering.

---

## Peer Dependency Notes

The following come up as warnings, but we don't need to add.

- @emotion/core - Storybook bug - [https://github.com/storybookjs/storybook/issues/5919](https://github.com/storybookjs/storybook/issues/5919)

---
