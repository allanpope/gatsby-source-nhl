import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { TeamData, DivisionNode } from '../types';

const buildDivisionNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): DivisionNode[] => {
  const teamsGroupedByDivisions = groupBy(
    teams,
    (team: TeamData) => team.division.name,
  );
  const nodes = [];

  for (const [division, teams] of Object.entries(teamsGroupedByDivisions)) {
    nodes.push({
      id: createNodeId(teams[0].division.id),
      externalId: teams[0].division.id,
      name: teams[0].division.name,
      nameShort: teams[0].division.nameShort,
      abbreviation: teams[0].division.abbreviation,
      slug: slugify(teams[0].division.name, { lower: true }),
      teams: teamsGroupedByDivisions[division].map(team =>
        createNodeId(team.id),
      ),
      internal: {
        type: 'NHLDivision',
        content: JSON.stringify(teams[0].division),
        contentDigest: createContentDigest(teams[0].division),
      },
    });
  }

  return nodes;
};

export default buildDivisionNodes;
