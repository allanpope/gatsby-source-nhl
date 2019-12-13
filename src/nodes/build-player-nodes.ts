import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';
import { flatten } from 'lodash';

import { TeamData, PlayerNode } from '../types';

const buildPlayerNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): PlayerNode[] => {
  const players = teams.map(team =>
    team.roster.roster.map(({ person, position }) => ({
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
        type: 'NHLPlayer',
        content: JSON.stringify(person),
        contentDigest: createContentDigest(person),
      },
    })),
  );

  return flatten(players);
};

export default buildPlayerNodes;
