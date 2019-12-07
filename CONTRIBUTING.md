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

- Navigate to the root directory in your terminal
- Run `npm install`
- Run `npm run watch` to compile the files
- Run `npm run test` to run the test suite

## How to contribute

- Make your changes on a branch
- Create a pull request describing your changes/edits
- Make sure you've added tests for your changes and the existing tests still pass
- Ask for the pull request to be reviewed
