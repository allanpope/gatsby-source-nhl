import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';

import { TeamData, FranchiseNode } from '../types';

const buildFranchiseNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): FranchiseNode[] => {
  return teams.map(team => ({
    id: createNodeId(team.franchise.franchiseId),
    slug: slugify(team.franchise.teamName, { lower: true }),
    externalId: team.franchise.franchiseId,
    teamName: team.franchise.teamName,
    team: createNodeId(team.id),
    internal: {
      type: 'NHLFranchise',
      content: JSON.stringify(team.franchise),
      contentDigest: createContentDigest(team.franchise),
    },
  }));
};

export default buildFranchiseNodes;
