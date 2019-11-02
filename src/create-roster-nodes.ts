import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';

import { Team, RosterItem } from './types/nhl-team';

const createRosterNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  teams.map((team: Team) => {
    team.roster.roster.map((rosterItem: RosterItem) => {
      // Player
      createNode({
        ...rosterItem.person,
        id: createNodeId(rosterItem.person.id),
        externalId: rosterItem.person.id,
        slug: slugify(rosterItem.person.fullName, { lower: true }),
        images: {
          headshot: `https://nhl.bamcontent.com/images/headshots/current/168x168/${rosterItem.person.id}@3x.jpg`,
          action: `https://nhl.bamcontent.com/images/actionshots/${rosterItem.person.id}@3x.jpg`,
        },
        team___NODE: createNodeId(team.id),
        position___NODE: createNodeId(rosterItem.position.name),
        internal: {
          type: `NHLPlayer`,
          content: JSON.stringify(rosterItem.person),
          contentDigest: createContentDigest(rosterItem.person),
        },
      });

      // RosterItem
      createNode({
        id: createNodeId(rosterItem.person.id),
        externalId: rosterItem.person.id,
        jerseyNumber: rosterItem.jerseyNumber,
        player___NODE: createNodeId(rosterItem.person.id),
        team___NODE: createNodeId(team.id),
        position___NODE: createNodeId(rosterItem.position.name),
        internal: {
          type: `NHLRosterItem`,
          content: JSON.stringify(rosterItem),
          contentDigest: createContentDigest(rosterItem),
        },
      });
    });
  });
};

export default createRosterNodes;
