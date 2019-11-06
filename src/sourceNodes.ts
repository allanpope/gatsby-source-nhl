import { SourceNodesArgs } from 'gatsby';

import { getTeamsData } from './nhl-api';
import createPlayerNodes from './create-player-nodes';
import createRosterNodes from './create-roster-nodes';
import createVenueNodes from './create-venue-nodes';
import createDivisionNodes from './create-division-nodes';
import createConferenceNodes from './create-conference-nodes';
import createPositionNodes from './create-position-nodes';
import createFranchiseNodes from './create-franchise-nodes';
import createTeamNodes from './create-team-nodes';

import { Teams } from './types/nhl-team';

const sourceNodes = async (createNodeHelpers: SourceNodesArgs) => {
  const { teams }: Teams = await getTeamsData();
  const { createNode } = createNodeHelpers.actions;

  createRosterNodes(teams, createNode, createNodeHelpers);
  createPlayerNodes(teams, createNode, createNodeHelpers);
  createVenueNodes(teams, createNode, createNodeHelpers);
  createDivisionNodes(teams, createNode, createNodeHelpers);
  createConferenceNodes(teams, createNode, createNodeHelpers);
  createPositionNodes(teams, createNode, createNodeHelpers);
  createFranchiseNodes(teams, createNode, createNodeHelpers);
  createTeamNodes(teams, createNode, createNodeHelpers);
};

export default sourceNodes;
