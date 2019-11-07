import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';

import { Team } from '../types/team';

const buildDivisionNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  return teams.map((team: Team) => ({
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
        primaryLight: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`,
        primaryDark: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${team.id}.svg`,
      },
    },
    internal: {
      type: `NHLTeam`,
      content: JSON.stringify(team),
      contentDigest: createContentDigest(team),
    },
  }));
};

export default buildDivisionNodes;
