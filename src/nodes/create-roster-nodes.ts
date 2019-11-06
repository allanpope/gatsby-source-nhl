import { SourceNodesArgs } from 'gatsby';

import { Team } from '../types/team';
import { RosterItem } from '../types/roster';

const createRosterNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  teams.map((team: Team) => {
    team.roster.roster.map(({ person, jerseyNumber, position }: RosterItem) => {
      createNode({
        id: createNodeId(person.id),
        externalId: person.id,
        jerseyNumber: jerseyNumber,
        player: createNodeId(person.id),
        team: createNodeId(team.id),
        position: position.name,
        internal: {
          type: `NHLRosterItem`,
          content: JSON.stringify({ ...person, jerseyNumber, ...position }),
          contentDigest: createContentDigest({
            ...person,
            ...position,
            jerseyNumber,
          }),
        },
      });
    });
  });
};

export default createRosterNodes;
