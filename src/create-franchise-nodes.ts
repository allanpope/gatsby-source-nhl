import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';

import { Team } from './types/nhl-team';

const createFranchiseNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  teams.map((team: Team) => {
    createNode({
      id: createNodeId(team.franchise.franchiseId),
      slug: slugify(team.franchise.teamName, { lower: true }),
      externalId: team.franchise.franchiseId,
      teamName: team.franchise.teamName,
      team: createNodeId(team.id),
      internal: {
        type: `NHLFranchise`,
        content: JSON.stringify(team.franchise),
        contentDigest: createContentDigest(team.franchise),
      },
    });
  });
};

export default createFranchiseNodes;
