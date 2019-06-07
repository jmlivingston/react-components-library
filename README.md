# jl-react-components-library

## Summary

This is a starting point for developing a reusable React component library using [Storybook](https://storybook.js.org) and [Rollup](https://rollupjs.org).

### Capabilities

- Develop and debug - Storybook
- Style - supports css, scss, module.css, and module.scss
- Build - Rollup
- Publish - npm
- Document - Storybook
- Test - Jest, @testing-library/react
- Lint - create-react-app
- Formatting - prettier

> Note: For creating an application, as opposed to a "component library", we recommend [create-react-app](https://facebook.github.io/create-react-app) for SPAs or [Next.js](https://nextjs.org) for SSRs.

---

## Install

- Clone this repository
- Change the name in package.json
- Run `npm i`

## Start

`npm start`

## Build

`npm run build`

> Note: See rollup.config.js for more information.

## Publish

`npm publish dist`

## Deploy Style Guide

`npm run publish-documentation`

> Note: Defaults to GitHub Pages and assumes git is initialized with a GitHub repository. To remove, delete publish-documentation in package.json scripts and uninstall @storybook/storybook-deployer.

---

## Configuration

This project uses a basic [webpack](https://webpack.js.org) configuration for building, GitHub pages for publishing, and Storybook for developing, debugging and a creating the documentation. For build configuration, see the root level webpack.config.js. For Storybook, use the configuration under the .storybook folder.

---

## Naming Conventions

> Note: This is a general guide. If using the create-component script, code in scripts/createComponent will need to be updated.

- PascalCase - Component names, component parent folders, and any component related file names (.js, .spec.js, .stories.js, .css, .module.css, .scss, .module.scss)
- SNAKE_CASE (upper cased) - constant files and constant variables within.
- kebab-case - class and id names for CSS or SASS.
- camelCase - class and id names for CSS modules or SASS modules. All other functions, variables, and folders.

---

## Folder Structure

This project tries to stay flat as possible, but can be easily changed or extended. All source code is under src. All component related files, including styling, tests, and stories are contained under src/components within a component folder. Storybook configuration is in .storybook by convention and is built under storybook-static. Build is generated under dist.

---

## Lint Rules

These are based on create-react-app with a few extras in package.json under eslintConfig. Husky and lint-staged is used to prevent commits when any lint rules or errors are broken.

---

## Formatting Rules

Prettier is used and is configured under prettier in package.json. Husky and lint-staged is used to format before commits.

---

## Testing

Jest, react-testing-library, and react-hooks-testing-library are used for testing.

---

## Tooling

### Create New Component

To create new components, you can use the following to generate the component, styles, stories, and spec. To customize this, scripts/createComponent can be updated.

`npm run create-component -- name=fooBar`

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

- Move createComponents to it's own package
- Update README_PACKAGE.md
- Storybook bug - shows accessibility errors on CSS Modules.
- Storybook bug - shows accessibility errors on root elements
- Storybook bug - Error in console: The pseudo class ":first-child" is potentially unsafe when doing server-side rendering.

---

## Peer Dependencies Notes

The following come up as warnings, but we don't need to add.

- @emotion/core - Storybook bug - https://github.com/storybookjs/storybook/issues/5919

---
