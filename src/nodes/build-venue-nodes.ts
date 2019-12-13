import { NodePluginArgs, NodeInput } from 'gatsby';
import { get } from 'lodash';

import { TeamData } from '../types';

const buildVenueNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): NodeInput[] => {
  return teams.map((team: TeamData) => ({
    id: createNodeId(team.venue.name),
    externalId: get(team, 'venue.id', null), // NHL API missing ID's for some venues
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
