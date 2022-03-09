# JavaScriptmas 2020 Solutions

![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/notalexross/b93f579e56434ef316654ad878988990/raw/358206029__badge__tests.json)
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/notalexross/b93f579e56434ef316654ad878988990/raw/358206029__badge__coverage.json)
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/notalexross/b93f579e56434ef316654ad878988990/raw/358206029__badge__lint.json)
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/notalexross/b93f579e56434ef316654ad878988990/raw/358206029__badge__build.json)
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/notalexross/b93f579e56434ef316654ad878988990/raw/358206029__badge__deploy.json)
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/notalexross/b93f579e56434ef316654ad878988990/raw/358206029__badge__commit.json)

## Description

A small web app created in order to collate and present my solutions to [Scrimba](https://scrimba.com)'s [#JavaScriptmas](https://twitter.com/search?q=%23javascriptmas) Advent calendar, 2020.

This app features a single accordion component, with each expandable entry containing the description of a problem alongside a fully functioning embedded solution to said problem. The app was built with [React](https://reactjs.org/) and kept as simple as possible, in order to ensure that emphasis remains on the solutions themselves.

Demo: https://jsmas.rossdaniel.com \
Portfolio Entry: https://rossdaniel.com/projects/javascriptmas-solutions

## Prerequisites

Requires [Node.js](https://nodejs.org).

## Installation

To clone the repository and install any dependencies, run the following commands:

```sh
git clone https://github.com/notalexross/jsmas-2020.git
cd jsmas-2020
cp .env.example .env
npm install
```

Be sure to substitute your own values for the variables defined in `.env`.

## Development

To run the app in development mode, run the following command and open http://localhost:3000 to view it in the browser.

```sh
npm run start
```

## Production

To build the app for production to the `build` folder, run the following command:

```sh
npm run build
```

## Permission

You may freely clone this work and experiment with it in your local development environment, but please do not reproduce, redistribute, or present it as your own.

Copyright &copy; Daniel Ross
