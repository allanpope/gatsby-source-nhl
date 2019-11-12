import { NodePluginArgs, NodeInput } from 'gatsby';
import { get } from 'lodash';

import { Team } from '../types/team';

const buildVenueNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): Array<NodeInput> => {
  return teams.map((team: Team) => ({
    id: createNodeId(team.venue.name),
    externalId: get(team, 'venue.id', null),
    name: team.venue.name,
    city: team.venue.city,
    team: createNodeId(team.id),
    timeZone: {
      id: team.venue.timeZone.id,
      offset: team.venue.timeZone.offset,
      tz: team.venue.timeZone.tz,
    },
    internal: {
      type: 'NHLVenue',
      content: JSON.stringify(team.venue),
      contentDigest: createContentDigest(team.venue),
    },
  }));
};

export default buildVenueNodes;