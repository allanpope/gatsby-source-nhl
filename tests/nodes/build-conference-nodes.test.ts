import buildConferenceNodes from '../../src/nodes/build-conference-nodes';
import teams from '../fixtures/teams';

describe('buildConferenceNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(() => 'mock-id'),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildConferenceNodes(teams, createNodeHelpers);
  });

  it('returns two objects representing each conference', () => {
    expect(result).toHaveLength(2);
  });

  it('calls createContentDigest for each conference', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(2);
  });

  it('calls createNodeId with the conference id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].conference.id,
    );
  });

  it('returns a object with the required gatsby fields', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        internal: {
          type: expect.any(String),
          content: expect.anything(),
          contentDigest: expect.anything(),
        },
      }),
    );
  });

  it('returns a object with conference fields', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        name: expect.any(String),
        slug: expect.any(String),
        teams: expect.any(Array),
      }),
    );
  });

  it('creates a slug for each conference', () => {
    expect(result).toEqual([
      expect.objectContaining({
        slug: 'eastern',
      }),
      expect.objectContaining({
        slug: 'western',
      }),
    ]);
  });

  it('creates a an array of ids for each team in a conference', () => {
    expect(result[0].teams).toHaveLength(16);
    expect(result[1].teams).toHaveLength(15);
  });
});
