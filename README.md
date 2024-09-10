# Build Tool Showcase

## Project Description

This project creates a small web application that demonstrates the use of various build
tools and package managers. This project will help assess your understanding of build
processes, dependency management, and basic web development concepts.

## Setup Instructions

1. Set up a project using npm as the package manager
2. Create a simple web application using the following features:
   • A header with a title
   • A content area that displays a list of popular build tools from a JSON file
   • A footer with a copyright notice.
3. Use Webpack as the main build tool.
4. Implement the following:
   • Use ES6+ JavaScript features
   • Use Sass for styling
   • Implement at least one external JavaScript library (e.g., lodash, moment)
   • Create a development and a production build configuration
5. Use Bable to ensure browser compatibility.
6. Implement source maps for easier debugging.
7. Set up a local development server using webpack-dev-server
8. Create npm scripts for various tasks:
   • Start the development server
   • Create a production build
   • Run linting (use ESLint)
   • Run tests (use Jest for a simple test)
9. Optimize the production build:
   • Minify JavaScript and CSS
   • Implement code splitting for the external library

10. Add unit tests for all the functions.

## NPM scripts and their purposes

1.  "start": "webpack serve --config webpack.dev.js --open --mode development"

    - Purpose: This script starts a development server using Webpack. It serves your application with live reloading, allowing you to see changes in real-time.

    \_Parameters:

    - webpack serve: Starts the Webpack Dev Server.

    - --config webpack.dev.js: Specifies the Webpack configuration file for development.

    - --open: Opens the application in the default web browser automatically.

    - --mode development: Sets the mode to development, which typically includes features like source maps and unminified code for easier debugging.

2.  "build": "webpack -config webpack.prod.js --mode production"

    - Purpose: This script builds your application for production. It generates optimized bundles, minifies code, and performs other optimizations.

    \_Parameters:

    - webpack: Runs the Webpack bundler.

    - --config webpack.prod.js: Specifies the Webpack configuration file for production.

    - --mode production: Sets the mode to production, which enables optimizations like minification and code splitting for better performance.

3.  "lint": "eslint src/\*_/_.js"

    - Purpose: This script runs ESLint to check your code for style and syntax issues according to the rules specified in your ESLint configuration.

    \_Parameters:

    - eslint src/\*_/_.js: Lints all JavaScript files in the src directory and its subdirectories.

4.  "test": "jest"

    - Purpose: This script runs tests using Jest, a popular testing framework for JavaScript.

    \_Parameters:

    - jest: Executes the Jest test runner, which looks for test files and runs the tests defined in them.


