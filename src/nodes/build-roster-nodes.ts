import { NodePluginArgs } from 'gatsby';

import { TeamData, RosterItemNode } from '../types';

const buildRosterNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): RosterItemNode[] =>
  teams.flatMap(team =>
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

export default buildRosterNodes;
