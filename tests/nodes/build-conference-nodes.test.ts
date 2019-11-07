import buildConferenceNodes from '../../src/nodes/build-conference-nodes';
import teams from '../fixtures/teams';

describe('buildConferenceNodes', () => {
  const createNodeHelpers = {
    createNodeId: jest.fn(),
    createContentDigest: jest.fn(),
  };

  it('returns a object for each conference', () => {
    expect(buildConferenceNodes(teams, createNodeHelpers).length).toEqual(2);
  });
});
