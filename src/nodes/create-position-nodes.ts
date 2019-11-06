import { SourceNodesArgs } from 'gatsby';
import { flattenDeep } from 'lodash';
import slugify from 'slugify';

import { Team } from '../types/team';
import { Position } from '../types/position';
import { RosterItem } from '../types/roster';
import positions from '../data/positions';

const createPositionNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  const allRosterItems: RosterItem[] = flattenDeep(
    teams.map((team: Team) => team.roster.roster),
  );

  positions.map((position: Position) => {
    const filteredRosterItems = allRosterItems.filter((item: RosterItem) => {
      return item.position.name === position.name;
    });

    createNode({
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
    });
  });
};

export default createPositionNodes;
