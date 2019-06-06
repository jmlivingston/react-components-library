# react-components-library

## TLDR

- `npm i`
- `npm start`

---

## Summary

The goal of this library is to provide a starting point for creating a reusable React component library with following capabilities:

- Develop and debug
- Style (Supports css, scss, module.css, and module.scss)
- Build
- Publish
- Document
- Test
- Lint

> Note: For creating a React application, as opposed to a "component library", we recommend [create-react-app](https://facebook.github.io/create-react-app) for SPAs or [Next.js](https://nextjs.org) for SSRs.

---

## Install

- Clone this repository
- Change the name in package.json
- Run `npm i`

## Start

`npm start`

## Build

`npm run build`

> Note: The scripts/preBuild.mjs script creates an index.js file on the fly before the build.

## Publish

`npm publish`

> Note: Defaults to GitHub Pages and assumes git is initialized with a GitHub repository. To remove, delete deploy-style-guide in package.json scripts and uninstall @storybook/storybook-deployer.

---

## Configuration

This project uses a basic [webpack](https://webpack.js.org) configuration for building, GitHub pages for publishing, and Storybook for developing, debugging and a creating the style guide. For build configuration, see the root level webpack.config.js.

---

## Naming Conventions

> Note: This is a general guide. If using the create-component script, code in scripts/createComponent will need to be updated.

- PascalCase - Component names and any component related file names (.js, .spec.js, .stories.js, .css, .module.css, .scss, .module.scss)
- SNAKE_CASE (upper cased) - constant files and variables within.
- kebab-case - CSS and SASS class and id names.
- camelCase - All other functions and variable names.

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
