import { NodePluginArgs, NodeInput } from 'gatsby';
import { flattenDeep } from 'lodash';
import slugify from 'slugify';

import { TeamData, PositionData, PositionNode, RosterItem } from '../types';
import positions from '../data/positions';

const buildPositionNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): PositionNode[] => {
  const allRosterItems: RosterItem[] = flattenDeep(
    teams.map((team: TeamData) => team.roster.roster),
  );

  return positions.map((position: PositionData) => {
    const filteredRosterItems = allRosterItems.filter((item: RosterItem) => {
      return item.position.name === position.name;
    });

    return {
      id: createNodeId(position.name),
      name: position.name,
      type: position.type,
      abbreviation: position.abbreviation,
      slug: slugify(position.name, { lower: true }),
      players: filteredRosterItems.map((rosterItem: RosterItem) =>
        createNodeId(rosterItem.person.id),
      ),
      internal: {
        type: 'NHLPosition',
        content: JSON.stringify(position),
        contentDigest: createContentDigest(position),
      },
    };
  });
};

export default buildPositionNodes;
