https://travis-ci.com/allanpope/gatsby-source-nhl.svg?token=D3zsgzAQTqAWzn8yCtWz&branch=master

# gatsby-source-nhl

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
