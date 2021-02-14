![logo](https://user-images.githubusercontent.com/6104940/107880275-b04f2b80-6ed5-11eb-9852-de05425070cc.png)

# React TypeScript Webpack Starter

A starter project for using React, TypeScript, SCSS and Webpack, along with Jest for writing tests.

## Features
- Webpack 5 + HMR
- TypeScript + React
- SCSS + Autoprefixing 
- Jest

## 🚀 Getting Started

Get up and running with these simple steps:

1. Clone the project
2. Run `npm install`
3. Run `npm run dev`

## Development

```shell
npm install
npm run dev
```

## Production
Note: This will compile to a `dist` folder.
```shell
npm run build
```

## Configuration
Optional configuration for the project can be done in the following files below.

- Open [.browerslistrc](/.browserslist) to configure Browser support for TypeScript + SCSS compiliation. [Read more here about Browerslist](https://github.com/browserslist/browserslist).

- Open [env.config.js](/env.config.js) and you will see the default configuration for the project.

    - [Webpack devserver](https://webpack.js.org/configuration/dev-server/) - configure our local development server, e.g hostname or port.
    - [Webpack copyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) - folders to copy over to our dist, e.g fonts.
    - [Webpack terserConfig](https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions) - options for production compilation. 
    - [SCSS](https://sass-lang.com/) - the destination and filename to compile SCSS to.


## Tests
You can create tests in the `src/__tests__` folder. 
Tests are handled by [Jest](https://jestjs.io/)

```shell
npm run test
```


### Build tools

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [TypeScript](https://www.typescriptlang.org) - TypeScript is a superset of JavaScript that compiles to clean JavaScript.
* [Webpack 5](https://webpack.js.org/) - App bundler for JavaScript.
* [SCSS](https://sass-lang.com/) - Preprocessor for SCSS to CSS.
* [Jest](https://jestjs.io/) - JavaScript Testing Framework.


### 📝License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details