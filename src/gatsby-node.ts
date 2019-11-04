import { SourceNodesArgs } from 'gatsby';

import { getTeamsData } from './nhl-api';
import createPositionNodes from './create-position-nodes';
import createPlayerNodes from './create-player-nodes';
import createRosterNodes from './create-roster-nodes';
import createTeamNodes from './create-team-nodes';
import { Teams } from './types/nhl-team';

export const sourceNodes = async (createNodeHelpers: SourceNodesArgs) => {
  const { teams }: Teams = await getTeamsData();
  const { createNode } = createNodeHelpers.actions;

  createPositionNodes(teams, createNode, createNodeHelpers);
  createRosterNodes(teams, createNode, createNodeHelpers);
  createPlayerNodes(teams, createNode, createNodeHelpers);
  createTeamNodes(teams, createNode, createNodeHelpers);
};
