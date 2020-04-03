# jl-react-components-library

> **Audience:** Developer working in this repository.

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

This project allows CSS and SASS. If you are importing from node_modules, you will need to prefix with a tilde `~`. SASS Example:

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

## Naming Conventions

- **PascalCase** - Component names, component parent folders, and any component related file names (.js, .test.js, .stories.js, .css, .module.css, .scss, .module.scss)
- **SNAKE_CASE** (upper cased) - constant files and constant variables within.
- **kebab-case** - class and id names for CSS or SASS.
- **camelCase** - class and id names. All other functions, variables, and folders.

---

## Folders

This project aims to stay flat as possible, but can be easily changed or extended.

- **dist** - build directory
- **storybook-static** - documentation build directory
- **scripts** - this includes utilities, build, storybook, plop templates, and [Jest](https://jestjs.io) configuration
- **src** - source code
  - **constants** - shared constants
  - **documentation** - Stories for high-level documentation
  - **helpers** - shared helpers and hooks
  - **resources** - localization resources and helpers
  - **services** - API helpers and mock data
  - **ui** - components, tests, stories, and style (SASS) files
    - **core** - base components
    - **report** - report components
    - **compound** - components based on other components such as dashboards and pages

---

## Build

Build uses [Rollup](https://rollupjs.org) to generate indepdendent component bundles based on the folder structure under src. Here are a few features:

- All documentation, mock, styles, tests, and stories are filtered out.
- An index is also created for components where they are the only component in the directory. For example: BlueButton/BlueButton becomes BlueButton/index.js in dist.
- The dist package.json is created in rollup.config.js
- The README_PACKAGE.md is copied over to dist as README.md.

### Special notes on index.js and exports

- Export rules - Unless using an index.js file, always export as default.
- When to create an index.js file? - Only create when a component relies on others. (For example, Reactstrap's Dropdown component works alongside the DropdownToggle, DropdownMenu, and DropdownItem components and could be packaged together.)
- Build Autogeneration - To make files more easier searchable within the IDE and to avoid redundancy when consuming the package, an auto-generated index.js file is created when the file is the same name as the parent directory and the directory doesn't already have an index.js file.
- Example: src/ui/BlueButton/BlueButton would become dist/cjs/ui/BlueButton/index.js if index.js doesn't exist in src/ui/BlueButton. This gives us the best of both worlds, by allowing us to search with IDE on BlueButton (not index.js) and allow consumers to import like this `import BlueButton from 'jl-react-components-library/cjs/ui/BlueButton'`.

> **Settings** - scripts/build/\*

---

## Lint

These are based on create-react-app's linting rules, whith a few minor tweaks. Husky and lint-staged is used to prevent commits when any lint rules or errors are broken.

> **Settings** - package.json (eslintConfig, lint-staged, and husky)

---

## Format

Prettier is used and is configured under prettier in package.json. Husky and lint-staged is used to format before commits.

> **Settings** - package.json (eslintConfig, lint-staged, and husky)

---

## Test

[Jest](https://jestjs.io), [@testing-library/react](https://testing-library.com), and [react-hooks-testing-library](https://github.com/mpeyper/react-hooks-testing-library) are used for testing.

> **Settings** package.json ([Jest](https://jestjs.io)), scripts/test/\*

---

## NPM Linking for debugging

If you have a separate app and want to reference this package locally without using the registry, [npm-link](https://docs.npmjs.com/cli/link) is supported. Here are the required steps:

1. Using the terminal, run the build. You can also opt to use `build` if testing once.

`npm run build-watch`

2. `cd` into the `dist` directory and run `npm link`

```bash
cd dist
npm link
```

3. Navigate to the root directory of the app you will be integrating with and run the following:

`npm link jl-react-components-library`

4. If finished debugging, unlink in both the package source dist folder and your other app's root directory.

In the other app
`npm unlink --no-save jl-react-components-library`

In the package source dist folder
`npm unlink`

---

## Tooling

### Create New Component

To create new components, you can use the following to generate the component, styles, stories, and test. This feature utilizes [Plop](https://plopjs.com/).

`npm run generate`

> **Settings** - scripts/templates

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

## 3rd Party Issues

**Storybook**

- Storybook bug - shows accessibility errors on CSS Modules.
- Storybook bug - shows accessibility errors on root elements
- Storybook bug - Error in console: The pseudo class ":first-child" is potentially unsafe when doing server-side rendering.

---
