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

  fit('returns a object for each conference', () => {
    expect(result).toEqual([
      expect.objectContaining({ name: 'Eastern' }),
      expect.objectContaining({ name: 'Western' }),
    ]);
  });

  it('calls createContentDigest for each conference', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(2);
  });

  it('calls createNodeId with the conference id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].conference.id,
    );
  });

  it('returns objects with the required gatsby shape', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        internal: {
          type: 'NHLConference',
          content: expect.anything(),
          contentDigest: 'mock-digest',
        },
      }),
    );
  });

  it('returns the stringified value of the team conference', () => {
    expect(result[0].internal.content).toEqual(
      JSON.stringify(teams[0].conference),
    );
  });

  it('returns a object with conference shape', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        name: expect.any(String),
        slug: expect.any(String),
        teams: expect.any(Array),
      }),
    );
  });

  it('creates a slug for each conference using the name', () => {
    expect(result).toEqual([
      expect.objectContaining({
        slug: 'eastern',
      }),
      expect.objectContaining({
        slug: 'western',
      }),
    ]);
  });

  it('returns an array of ids for each team in the conference', () => {
    expect(result[0].teams).toHaveLength(16);
    expect(result[1].teams).toHaveLength(15);
  });
});
