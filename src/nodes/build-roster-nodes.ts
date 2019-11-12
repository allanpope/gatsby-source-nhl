import { NodePluginArgs, NodeInput } from 'gatsby';
import { flatten } from 'lodash';

import { Team } from '../types/team';
import { RosterItem } from '../types/roster';

const buildRosterNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): Array<NodeInput> => {
  const rosterItems = teams.map((team: Team) =>
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
