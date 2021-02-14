# React TypeScript Webpack Starter

A simple starter project for using React, TypeScript, SCSS and Webpack, along with Jest for writing tests.

## Features
- Webpack 5 + HMR
- TypeScript + React
- SCSS + Autoprefixing 
- Jest

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


## Development

```shell
npm install
npm run dev
```

### Configuration
Optional configuration for the project can be found below.

- Open [.browerslistrc](/.browserslist) to configure Browser support for TypeScript + SCSS compiliation. [Read more here about Browerslist](https://github.com/browserslist/browserslist).

- Open [env.config.js](/env.config.js) and you will the default configuration.

    - [Webpack devserver](https://webpack.js.org/configuration/dev-server/) - configure our local development server, e.g hostname or port.
    - [Webpack copyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) - folders to copy over to our dist, e.g fonts.
    - [Webpack terserConfig](https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions) - options for production compilation. 
    - [SCSS](https://sass-lang.com/) - the destination and filename to compile SCSS to.


### Tests
You can create tests in the `src/__tests__` folder. 
Tests are handled by [Jest](https://jestjs.io/)

```shell
npm run test
```

## Production
Note: This will compile to a `dist` folder.
```shell
npm run build
```


### Build tools

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [TypeScript](https://www.typescriptlang.org) - TypeScript is a superset of JavaScript that compiles to clean JavaScript.
* [Webpack 5](https://webpack.js.org/) - App bundler for JavaScript.
* [SCSS](https://sass-lang.com/) - Preprocessor for SCSS to CSS.
* [Jest](https://jestjs.io/) - JavaScript Testing Framework.


### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details