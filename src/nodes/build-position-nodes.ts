import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';

import { TeamData, RosterItemData, PositionNode } from '../types';
import positions from '../data/positions';

const buildPositionNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): PositionNode[] => {
  const allRosterItems = teams.flatMap(team => team.roster.roster);

  return positions.map(position => ({
    id: createNodeId(position.name),
    name: position.name,
    type: position.type,
    abbreviation: position.abbreviation,
    slug: slugify(position.name, { lower: true }),
    players: allRosterItems
      .filter((item: RosterItemData) => item.position.name === position.name)
      .map(rosterItem => createNodeId(rosterItem.person.id)),
    internal: {
      type: 'NHLPosition',
      content: JSON.stringify(position),
      contentDigest: createContentDigest(position),
    },
  }));
};

export default buildPositionNodes;
