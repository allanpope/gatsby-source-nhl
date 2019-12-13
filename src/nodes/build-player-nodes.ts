import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';
import { flatten } from 'lodash';

import { TeamData, RosterItem, PlayerNode } from '../types';

const buildPlayerNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): PlayerNode[] => {
  const players = teams.map((team: TeamData) =>
    team.roster.roster.map(({ player, position }: RosterItem) => ({
      id: createNodeId(player.id),
      externalId: player.id,
      fullName: player.fullName,
      slug: slugify(player.fullName, { lower: true }),
      images: {
        headshot: `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.id}@3x.jpg`,
        action: `https://nhl.bamcontent.com/images/actionshots/${player.id}@3x.jpg`,
      },
      team: createNodeId(team.id),
      position: position.name,
      internal: {
        type: 'NHLPlayer',
        content: JSON.stringify(player),
        contentDigest: createContentDigest(player),
      },
    })),
  );

  return flatten(players);
};

export default buildPlayerNodes;
