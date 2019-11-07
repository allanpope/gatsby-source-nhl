import { SourceNodesArgs } from 'gatsby';

import { getTeamsData } from './data/nhl-api';
import createPlayerNodes from './nodes/create-player-nodes';
import createRosterNodes from './nodes/create-roster-nodes';
import createVenueNodes from './nodes/create-venue-nodes';
import createDivisionNodes from './nodes/create-division-nodes';
import createConferenceNodes from './nodes/create-conference-nodes';
import createPositionNodes from './nodes/create-position-nodes';
import createFranchiseNodes from './nodes/create-franchise-nodes';
import createTeamNodes from './nodes/create-team-nodes';

import { Team } from './types/team';

const sourceNodes = async (createNodeHelpers: SourceNodesArgs) => {
  const teams: Team[] = await getTeamsData();
  const { createNode } = createNodeHelpers.actions;

  [
    ...createRosterNodes(teams, createNodeHelpers),
    ...createPlayerNodes(teams, createNodeHelpers),
    ...createVenueNodes(teams, createNodeHelpers),
    ...createDivisionNodes(teams, createNodeHelpers),
    ...createConferenceNodes(teams, createNodeHelpers),
    ...createPositionNodes(teams, createNodeHelpers),
    ...createFranchiseNodes(teams, createNodeHelpers),
    ...createTeamNodes(teams, createNodeHelpers),
  ].map(node => {
    createNode(node);
  });
};

export default sourceNodes;
