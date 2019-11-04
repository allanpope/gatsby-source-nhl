import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';

import { Team } from './types/nhl-team';

const createDivisionNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  teams.map(
    ({ franchise, venue, division, roster, conference, ...team }: Team) => {
      createNode({
        id: createNodeId(team.id),
        externalId: team.id,
        name: team.name,
        abbreviation: team.abbreviation,
        teamName: team.teamName,
        locationName: team.locationName,
        firstYearOfPlay: team.firstYearOfPlay,
        shortName: team.shortName,
        officialSiteUrl: team.officialSiteUrl,
        active: team.active,
        slug: slugify(team.name, { lower: true }),
        images: {
          logo: {
            primary_light: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`,
            primary_dark: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${team.id}.svg`,
          },
        },
        players___NODE: roster.roster.map(item => createNodeId(item.person.id)),
        roster___NODE: roster.roster.map(item => createNodeId(item.person.id)),
        division___NODE: createNodeId(division.id),
        conference___NODE: createNodeId(conference.id),
        venue___NODE: createNodeId(venue.name),
        franchise___NODE: createNodeId(franchise.franchiseId),
        internal: {
          type: `NHLTeam`,
          content: JSON.stringify(team),
          contentDigest: createContentDigest(team),
        },
      });
    },
  );
};

export default createDivisionNodes;
