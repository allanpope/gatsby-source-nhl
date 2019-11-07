import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';

import { Team } from '../types/team';
import { RosterItem } from '../types/roster';

const createPlayerNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
): void => {
  teams.map((team: Team) => {
    team.roster.roster.map(({ person, position }: RosterItem) => {
      createNode({
        id: createNodeId(person.id),
        externalId: person.id,
        fullName: person.fullName,
        slug: slugify(person.fullName, { lower: true }),
        images: {
          headshot: `https://nhl.bamcontent.com/images/headshots/current/168x168/${person.id}@3x.jpg`,
          action: `https://nhl.bamcontent.com/images/actionshots/${person.id}@3x.jpg`,
        },
        team: createNodeId(team.id),
        position: position.name,
        internal: {
          type: `NHLPlayer`,
          content: JSON.stringify(person),
          contentDigest: createContentDigest(person),
        },
      });
    });
  });
};

export default createPlayerNodes;
