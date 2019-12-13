import { NodePluginArgs, NodeInput } from 'gatsby';
import { flatten } from 'lodash';

import { TeamData, RosterItem } from '../types';

// Remake this

/*
roster: {
  ...,
  items: [
    ...
  ]
}

*/

const buildRosterNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): NodeInput[] => {
  const roster = teams.map((team: TeamData) =>
    team.roster.roster.map((rosterItem: RosterItem) => ({
      id: createNodeId(rosterItem.person.id),
      externalId: rosterItem.person.id,
      jerseyNumber: rosterItem.jerseyNumber,
      player: createNodeId(rosterItem.person.id),
      team: createNodeId(team.id),
      position: rosterItem.position.name,
      internal: {
        type: 'NHLRoster',
        content: JSON.stringify(rosterItem),
        contentDigest: createContentDigest(rosterItem),
      },
    })),
  );

  return flatten(roster);
};

export default buildRosterNodes;
