# React TypeScript Webpack Starter

A very simple starter project for using React,TypeScript and Webpack.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


### Installing

**Note:** Webpack is installed locally as recommended by the official [Webpack documentation](https://webpack.js.org/guides/installation/). It makes it easy to upgrade projects individually when breaking changes are introduced. 

Once you have forked and cloned off the project. 
Install the project dependencies by running:

```
npm install
```

#### Development
We will utilise `webpack-dev-server` to run a dev server. It serves webpack projects and updates the browser automatically with any changes we make in our code.

You can run `webpack-dev-server --mode development`

Alternatively utilising our npm scripts inside our `package.json` 

```
npm run dev
```

#### Production
You can run `webpack --mode production` or the below using our npm scripts.
```
npm run build
```

## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [TypeScript](https://www.typescriptlang.org) - TypeScript is a superset of JavaScript that compiles to clean JavaScript.
* [Webpack](https://webpack.js.org/) - App bundler for JavaScript.

#### Required for Webpack and TypeScript
* [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) - Helps Webpack compile our TypeScript code using `tsconfig.json`

#### Webpack Plugins
* [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin) - Simplifies creation of HTML files to serve our webpack bundles.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Saurabh Pati](https://hackernoon.com/react-with-typescript-and-webpack-654f93f34db6) - for his detailed tutorial on setting up React & TypeScript with Webpack

## Additional Notes
* [Terser](https://github.com/terser-js/terser/) - used by Webpack for compiling for production recently rolled out a breaking change. 
As a temporary workaround, I've installed an earlier version of `"terser": "^3.14.1"` as this works.  [Read more](https://github.com/terser-js/terser/issues/252) on the issue here.