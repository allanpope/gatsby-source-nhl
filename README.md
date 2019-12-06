![CI](https://github.com/allanpope/gatsby-source-nhl/workflows/CI/badge.svg)
![semantic-release](https://github.com/allanpope/gatsby-source-nhl/workflows/Release/badge.svg)

# gatsby-source-nhl

A Gatsby source plugin for sourcing data into your Gatsby application from the NHL.

The plugin creates nodes from portions of the NHL API. It allows you to query data such as teams, players, stadiums and more.

## Install

`npm install --save gatsby-source-nhl`

## Disclaimer

This is an unofficial plugin and is using the [publicly accessible parts](https://gitlab.com/dword4/nhlapi) of the NHL API. There is nothing stopping the NHL to restrict the API or to push out break changes.

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-nhl',
      options: {},
    },
  ],
};
```

## How to query

You can query team nodes using the following:

```graphql
{
  allNhlTeam {
    edges {
      node {
        teamName
        shortName
        name
      }
    }
  }
}
```

## Querying dynamic information

You may run into cases where you want up to date information such as statistics on players and teams. To do this you would need to fetch data on the client, not at build time. You can read more about this [here](https://www.gatsbyjs.org/docs/client-data-fetching/).

Most nodes have an attribute called `externalId` which you can query. This is the Id used by the NHL to identify records. You'll need to use this Id when querying parts of [their api](https://gitlab.com/dword4/nhlapi/blob/master/stats-api.md).
