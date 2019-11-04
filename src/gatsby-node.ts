import { SourceNodesArgs } from 'gatsby';

import { getTeamsData } from './nhl-api';
import createPositionNodes from './create-position-nodes';
import createPlayerNodes from './create-player-nodes';
import createRosterNodes from './create-roster-nodes';
import createTeamNodes from './create-team-nodes';
import createFranchiseNodes from './create-franchise-nodes';
import createDivisionNodes from './create-division-nodes';
import createConferenceNodes from './create-conference-nodes';
import createVenueNodes from './create-venue-nodes';
import { Teams } from './types/nhl-team';

export const sourceNodes = async (createNodeHelpers: SourceNodesArgs) => {
  const { teams }: Teams = await getTeamsData();
  const { createNode } = createNodeHelpers.actions;

  createPositionNodes(teams, createNode, createNodeHelpers);
  createRosterNodes(teams, createNode, createNodeHelpers);
  createPlayerNodes(teams, createNode, createNodeHelpers);
  createFranchiseNodes(teams, createNode, createNodeHelpers);
  createVenueNodes(teams, createNode, createNodeHelpers);
  createDivisionNodes(teams, createNode, createNodeHelpers);
  createConferenceNodes(teams, createNode, createNodeHelpers);
  createTeamNodes(teams, createNode, createNodeHelpers);
};
