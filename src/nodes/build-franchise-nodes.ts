import { NodePluginArgs, NodeInput } from 'gatsby';
import slugify from 'slugify';

import { Team } from '../types/team';

const buildFranchiseNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): Array<NodeInput> => {
  return teams.map((team: Team) => ({
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