import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from '../types/team';

const buildVenueNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: NodePluginArgs,
) => {
  const teamsByDivisions = groupBy(teams, (team: Team) => team.division.name);

  return teams.map((team: Team) => ({
    id: createNodeId(team.division.id),
    externalId: team.division.id,
    name: team.division.name,
    nameShort: team.division.nameShort,
    abbreviation: team.division.abbreviation,
    slug: slugify(team.division.name, { lower: true }),
    teams: teamsByDivisions[team.division.name].map(team =>
      createNodeId(team.id),
    ),
    internal: {
      type: `NHLDivision`,
      content: JSON.stringify(team.division),
      contentDigest: createContentDigest(team.division),
    },
  }));
};

export default buildVenueNodes;
