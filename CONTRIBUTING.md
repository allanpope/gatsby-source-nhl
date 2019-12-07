# Contributing

## About the project

### Development tools:

- TypeScript
- Jest
- ESLint

### CI tools:

- Github actions
- Semantic release

### Github actions

Creating a pull request will trigger the CI workflow. The CI runs tests and linters on different operating systems and versions of Node. It must pass before your pull request can merged into master.

On merging the pull request the release workflow will be fired. The release workflow ensures the latest code is released to NPM. Using the conventional commits pattern, the commit is analysed and a new version of the package is released.

The two folders of interest are `src` and `tests`. The `tests` folder follows the `src` directory structure and includes a test for each file in `src`

Inside the `src` folder you'll see the folders `data` and `nodes`. The `data` folder handles fetching data, while the `nodes` directory handles building the Gatsby node objects.

## Running the project

- type script, how to compile

## How to contribute

- create pr
- add tests
- make sure everyworks
- review

## Add new nodes

- where located
- how it works

## Release process

- pr has to be up to date before merging
- what process for it publishing( conventional commits) and flow
