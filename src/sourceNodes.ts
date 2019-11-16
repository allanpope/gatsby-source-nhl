import { NodePluginArgs } from 'gatsby';

import { getTeamsData } from './data/nhl-api';
import buildPlayerNodes from './nodes/build-player-nodes';
import buildRosterNodes from './nodes/build-roster-nodes';
import buildVenueNodes from './nodes/build-venue-nodes';
import buildDivisionNodes from './nodes/build-division-nodes';
import buildConferenceNodes from './nodes/build-conference-nodes';
import buildPositionNodes from './nodes/build-position-nodes';
import buildFranchiseNodes from './nodes/build-franchise-nodes';
import buildTeamNodes from './nodes/build-team-nodes';

import { Team } from './types/team';

const sourceNodes = async (createNodeHelpers: NodePluginArgs) => {
  const teams: Team[] = await getTeamsData();
  const { createNode } = createNodeHelpers.actions;

  return [
    ...buildRosterNodes(teams, createNodeHelpers),
    ...buildPlayerNodes(teams, createNodeHelpers),
    ...buildVenueNodes(teams, createNodeHelpers),
    ...buildDivisionNodes(teams, createNodeHelpers),
    ...buildConferenceNodes(teams, createNodeHelpers),
    ...buildPositionNodes(teams, createNodeHelpers),
    ...buildFranchiseNodes(teams, createNodeHelpers),
    ...buildTeamNodes(teams, createNodeHelpers),
  ].map(node => {
    createNode(node);
  });
};

export default sourceNodes;
