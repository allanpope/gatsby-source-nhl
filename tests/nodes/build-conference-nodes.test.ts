import buildConferenceNodes from '../../src/nodes/build-conference-nodes';
import teams from '../fixtures/teams';

describe('buildConferenceNodes', () => {
  const createNodeHelpers: any = {
    createNodeId: jest.fn(() => 'mock-id'),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  it('returns a object for each conference', () => {
    console.log(buildConferenceNodes(teams, createNodeHelpers));
    expect(buildConferenceNodes(teams, createNodeHelpers).length).toHaveLength(
      2,
    );
  });
});
