import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from '../types/team';

const createVenueNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
): void => {
  const teamsByDivisions = groupBy(teams, (team: Team) => team.division.name);

  teams.map((team: Team) => {
    createNode({
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
    });
  });
};

export default createVenueNodes;
