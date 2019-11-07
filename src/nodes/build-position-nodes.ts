import { NodePluginArgs } from 'gatsby';
import { flattenDeep } from 'lodash';
import slugify from 'slugify';

import { Team } from '../types/team';
import { Position } from '../types/position';
import { RosterItem } from '../types/roster';
import positions from '../data/positions';

const buildPositionNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: NodePluginArgs,
) => {
  const allRosterItems: RosterItem[] = flattenDeep(
    teams.map((team: Team) => team.roster.roster),
  );

  return positions.map((position: Position) => {
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
        type: `NHLPosition`,
        content: JSON.stringify(position),
        contentDigest: createContentDigest(position),
      },
    };
  });
};

export default buildPositionNodes;
