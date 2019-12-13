import { NodePluginArgs, NodeInput } from 'gatsby';
import { flatten } from 'lodash';

import { TeamData, RosterItem } from '../types';

const buildRosterNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): NodeInput[] => {
  const rosterItems = teams.map((team: TeamData) =>
    team.roster.roster.map((rosterItem: RosterItem) => ({
      id: createNodeId(rosterItem.person.id),
      externalId: rosterItem.person.id,
      jerseyNumber: rosterItem.jerseyNumber,
      player: createNodeId(rosterItem.person.id),
      team: createNodeId(team.id),
      position: rosterItem.position.name,
      internal: {
        type: 'NHLRosterItem',
        content: JSON.stringify(rosterItem),
        contentDigest: createContentDigest(rosterItem),
      },
    })),
  );

  return flatten(rosterItems);
};

export default buildRosterNodes;
