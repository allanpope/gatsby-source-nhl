import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';

import { TeamData, TeamNode } from '../types/team';

const buildTeamNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): TeamNode[] => {
  return teams.map((team: TeamData) => ({
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
      type: 'NHLTeam',
      content: JSON.stringify(team),
      contentDigest: createContentDigest(team),
    },
  }));
};

export default buildTeamNodes;
