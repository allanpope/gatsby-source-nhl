
![Build Status](https://github.com/allanpope/gatsby-source-nhl/workflows/ci/badge.svg)


This source plugin for Gatsby will pull data from the NHL and make it available in GraphQL queries.

## NHL docs

Drew Hynes has done a great job of documenting the publicly accessible portions [NHL API here.](https://gitlab.com/dword4/nhlapi).

## Installation

```sh
# Install the plugin
yarn add gatsby-source-nhl
```

In `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-nhl',
      options: {},
    },
  ],
};
```
