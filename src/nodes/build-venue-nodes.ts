import { SourceNodesArgs } from 'gatsby';
import { get } from 'lodash';

import { Team } from '../types/team';

const buildVenueNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  return teams.map((team: Team) => ({
    id: createNodeId(team.venue.name),
    externalId: get(team, 'venue.id'),
    name: team.venue.name,
    city: team.venue.city,
    timeZone: {
      id: team.venue.timeZone.id,
      offset: team.venue.timeZone.offset,
      tz: team.venue.timeZone.tz,
    },
    team: createNodeId(team.id),
    internal: {
      type: `NHLVenue`,
      content: JSON.stringify(team.venue),
      contentDigest: createContentDigest(team.venue),
    },
  }));
};

export default buildVenueNodes;
