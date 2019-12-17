import { NodePluginArgs } from 'gatsby';
import { flatten } from 'lodash';

import { TeamData, RosterItemNode } from '../types';

const buildRosterNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): RosterItemNode[] => {
  const roster = teams.map(team =>
    team.roster.roster.map(rosterItem => ({
      id: createNodeId(rosterItem.person.id),
      externalId: rosterItem.person.id,
      jerseyNumber: rosterItem.jerseyNumber,
      player: createNodeId(rosterItem.person.id),
      team: createNodeId(team.id),
      position: createNodeId(rosterItem.position.name),
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
