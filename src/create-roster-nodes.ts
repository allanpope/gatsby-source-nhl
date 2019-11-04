import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';

import { Team, RosterItem } from './types/nhl-team';

const createRosterNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  teams.map((team: Team) => {
    team.roster.roster.map(({ person, jerseyNumber, position }: RosterItem) => {
      const teamId = createNodeId(team.id);
      const personId = createNodeId(person.id);
      const positionId = createNodeId(position.name);

      // RosterItem
      createNode({
        id: personId,
        externalId: person.id,
        jerseyNumber: jerseyNumber,
        player___NODE: personId,
        team___NODE: teamId,
        position___NODE: positionId,
        internal: {
          type: `NHLRosterItem`,
          content: JSON.stringify({ ...person, jerseyNumber, ...position }),
          contentDigest: createContentDigest({
            ...person,
            jerseyNumber,
            ...position,
          }),
        },
      });

      // Player
      createNode({
        id: personId,
        externalId: person.id,
        fullName: person.fullName,
        slug: slugify(person.fullName, { lower: true }),
        images: {
          headshot: `https://nhl.bamcontent.com/images/headshots/current/168x168/${person.id}@3x.jpg`,
          action: `https://nhl.bamcontent.com/images/actionshots/${person.id}@3x.jpg`,
        },
        team___NODE: teamId,
        position___NODE: positionId,
        internal: {
          type: `NHLPlayer`,
          content: JSON.stringify(person),
          contentDigest: createContentDigest(person),
        },
      });
    });
  });
};

export default createRosterNodes;
