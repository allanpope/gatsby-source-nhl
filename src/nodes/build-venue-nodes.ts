import { NodePluginArgs } from 'gatsby';
import { get } from 'lodash';

import { TeamData, VenueNode } from '../types';

const buildVenueNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): VenueNode[] => {
  return teams.map(team => ({
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
