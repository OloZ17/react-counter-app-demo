# A simple counter-App using [React.js](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)

![example workflow](https://github.com/OloZ17/react-counter-app-demo/actions/workflows/node.js.yml/badge.svg)[![Coverage Status](https://coveralls.io/repos/github/OloZ17/react-counter-app-demo/badge.svg?branch=main&service=github)](https://coveralls.io/github/OloZ17/react-counter-app-demo?branch=main)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Based on https://github.com/arnab-datta/counter-app but in a modern way with TypeScript, Vite, and Vitest!

> **This tiny application is like adding, removing, deleting, resetting products which reflects in the total number of products into our shopping cart.**

This is a very basic app but useful to understand React Components, states, React Hooks, Data Flow, parent to child, TypeScript types, and modern build tools.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Vitest** - Fast unit testing framework
- **Bootstrap 5** - CSS framework
- **Testing Library** - React component testing utilities

## Scripts

Install node modules

### `npm install`

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite's fast HMR (Hot Module Replacement).
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload instantly when you make edits.

### `npm test`

Launches the Vitest test runner in watch mode.
Tests will automatically re-run when you make changes to your code.

### `npm run test:ui`

Launches Vitest UI - a beautiful web interface for viewing and debugging your tests.

### `npm run test:coverage`

Runs tests and generates a code coverage report.
Coverage reports will be available in the `coverage` directory.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes for cache busting.
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build.
Run this after `npm run build` to test the production build locally.

## TypeScript

This project is written in TypeScript, providing:
- Type safety and better IDE support
- Improved code quality and maintainability
- Better documentation through type definitions
- Easier refactoring

All components have proper TypeScript interfaces for props, ensuring type safety throughout the application.

## Vite

This project uses Vite instead of Create React App, providing:
- Lightning-fast cold server start
- Instant Hot Module Replacement (HMR)
- Optimized builds using Rollup
- Native ESM-based dev server
- Better developer experience

## Vitest

Tests are written using Vitest, which provides:
- Compatible with Jest API
- Fast execution with native ES modules
- Built-in code coverage with c8
- Beautiful UI for test visualization
- Perfect integration with Vite
