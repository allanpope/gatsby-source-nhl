import { SourceNodesArgs } from 'gatsby';

import { Team, RosterItem } from './types/nhl-team';

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
        player___NODE: createNodeId(person.id),
        team___NODE: createNodeId(team.id),
        position___NODE: createNodeId(position.name),
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
