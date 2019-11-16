import { NodePluginArgs } from 'gatsby';

import sourceNodes from '../src/sourceNodes';
import { getTeamsData } from '../src/data/nhl-api';
import buildRosterNodes from '../src/nodes/build-roster-nodes';
import buildPlayerNodes from '../src/nodes/build-player-nodes';
import buildVenueNodes from '../src/nodes/build-venue-nodes';
import buildDivisionNodes from '../src/nodes/build-division-nodes';
import buildConferenceNodes from '../src/nodes/build-conference-nodes';
import buildPositionNodes from '../src/nodes/build-position-nodes';
import buildFranchiseNodes from '../src/nodes/build-franchise-nodes';
import buildTeamNodes from '../src/nodes/build-team-nodes';

const teams = ['mock-teams'];

jest.mock('../src/data/nhl-api', () => ({
  getTeamsData: jest.fn(() => teams),
}));
jest.mock('../src/nodes/build-roster-nodes', () => ({
  default: jest.fn(() => ['mock-roster-node']),
}));
jest.mock('../src/nodes/build-player-nodes', () => ({
  default: jest.fn(() => ['mock-player-node']),
}));
jest.mock('../src/nodes/build-venue-nodes', () => ({
  default: jest.fn(() => ['mock-venue-node']),
}));
jest.mock('../src/nodes/build-division-nodes', () => ({
  default: jest.fn(() => ['mock-division-node']),
}));
jest.mock('../src/nodes/build-conference-nodes', () => ({
  default: jest.fn(() => ['mock-conference-node']),
}));
jest.mock('../src/nodes/build-position-nodes', () => ({
  default: jest.fn(() => ['mock-position-node']),
}));
jest.mock('../src/nodes/build-franchise-nodes', () => ({
  default: jest.fn(() => ['mock-franchise-node']),
}));
jest.mock('../src/nodes/build-team-nodes', () => ({
  default: jest.fn(() => ['mock-team-node']),
}));

describe('sourceNodes', () => {
  const mockCreateNode = jest.fn();
  const createNodeHelpers = ({
    actions: {
      createNode: mockCreateNode,
    },
  } as unknown) as NodePluginArgs;

  beforeEach(() => {
    jest.clearAllMocks();
    sourceNodes(createNodeHelpers);
  });

  it('calls #getTeamsData', () => {
    expect(getTeamsData).toHaveBeenCalledTimes(1);
  });

  it('calls #buildRosterNodes with teams and createNodeHelpers', () => {
    expect(buildRosterNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #buildPlayerNodes with teams and createNodeHelpers', () => {
    expect(buildPlayerNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #buildVenueNodes with teams and createNodeHelpers', () => {
    expect(buildVenueNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #buildDivisionNodes with teams and createNodeHelpers', () => {
    expect(buildDivisionNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #buildConferenceNodes with teams and createNodeHelpers', () => {
    expect(buildConferenceNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #buildPositionNodes with teams and createNodeHelpers', () => {
    expect(buildPositionNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #buildFranchiseNodes with teams and createNodeHelpers', () => {
    expect(buildFranchiseNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #buildTeamNodes with teams and createNodeHelpers', () => {
    expect(buildTeamNodes).toHaveBeenCalledWith(teams, createNodeHelpers);
  });

  it('calls #createNode with the response of each of the build functions', () => {
    expect(mockCreateNode).toHaveBeenCalledWith('mock-roster-node');
    expect(mockCreateNode).toHaveBeenCalledWith('mock-player-node');
    expect(mockCreateNode).toHaveBeenCalledWith('mock-venue-node');
    expect(mockCreateNode).toHaveBeenCalledWith('mock-division-node');
    expect(mockCreateNode).toHaveBeenCalledWith('mock-conference-node');
    expect(mockCreateNode).toHaveBeenCalledWith('mock-position-node');
    expect(mockCreateNode).toHaveBeenCalledWith('mock-franchise-node');
    expect(mockCreateNode).toHaveBeenCalledWith('mock-team-node');
    expect(mockCreateNode).toHaveBeenCalledTimes(8);
  });
});
