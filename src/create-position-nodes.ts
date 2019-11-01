import { SourceNodesArgs } from 'gatsby';
import { flattenDeep } from 'lodash';
import slugify from 'slugify';

import { Team, Position, RosterItem } from './types/nhl-team';
import positions from './positions';

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
      ...position,
      id: createNodeId(position.name),
      slug: slugify(position.name, { lower: true }),
      players___NODE: filteredRosterItems.map((rosterItem: RosterItem) =>
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
