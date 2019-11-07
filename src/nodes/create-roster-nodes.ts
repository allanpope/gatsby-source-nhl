import { SourceNodesArgs } from 'gatsby';
import { flatten } from 'lodash';

import { Team } from '../types/team';
import { RosterItem } from '../types/roster';

const createRosterNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  const rosterItems = teams.map((team: Team) =>
    team.roster.roster.map(
      ({ person, jerseyNumber, position }: RosterItem) => ({
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
      }),
    ),
  );

  return flatten(rosterItems);
};

export default createRosterNodes;
