import { SourceNodesArgs } from 'gatsby';
import { flatten } from 'lodash';
import { cre } from 'gatsby';

import { Team } from '../types/team';
import { RosterItem } from '../types/roster';

const createRosterNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  const rosterItems = teams.map((team: Team) =>
    team.roster.roster.map((rosterItem: RosterItem) => ({
      id: createNodeId(rosterItem.person.id),
      externalId: rosterItem.person.id,
      jerseyNumber: rosterItem.jerseyNumber,
      player: createNodeId(rosterItem.person.id),
      team: createNodeId(team.id),
      position: rosterItem.position.name,
      internal: {
        type: `NHLRosterItem`,
        content: JSON.stringify(rosterItem),
        contentDigest: createContentDigest(rosterItem),
      },
    })),
  );

  return flatten(rosterItems);
};

export default createRosterNodes;
