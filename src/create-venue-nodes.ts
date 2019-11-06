import { SourceNodesArgs } from 'gatsby';

import { Team } from './types/nhl-team';

const createVenueNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  teams.map((team: Team) => {
    createNode({
      id: createNodeId(team.venue.name),
      externalId: team.venue.id,
      name: team.venue.name,
      city: team.venue.city,
      timeZone: team.venue.timeZone,
      team: createNodeId(team.id),
      internal: {
        type: `NHLVenue`,
        content: JSON.stringify(team.venue),
        contentDigest: createContentDigest(team.venue),
      },
    });
  });
};

export default createVenueNodes;
