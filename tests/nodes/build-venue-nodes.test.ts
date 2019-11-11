import buildVenueNodes from '../../src/nodes/build-venue-nodes';
import teams from '../fixtures/teams';

describe('buildVenueNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(() => 'mock-id'),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildVenueNodes(teams, createNodeHelpers);
  });

  it('returns two objects representing each venue', () => {
    expect(result).toHaveLength(31);
  });

  it('calls createContentDigest for each venue', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(31);
  });

  it('calls createNodeId with the venue name', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].venue.name,
    );
  });

  it('calls createNodeId with the team id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(teams[0].id);
  });

  it('returns a object with the required gatsby fields', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        internal: {
          type: 'NHLVenue',
          content: expect.anything(),
          contentDigest: expect.anything(),
        },
      }),
    );
  });

  it('returns a object with venue fields', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number), // maybe type
        name: expect.any(String),
        city: expect.any(String),
        team: expect.any(Number),
        timeZone: {
          id: expect.any(Number),
          offset: expect.any(Number),
          tz: expect.any(Number),
        },
      }),
    );
  });

  it('creates returns the team id for the venue', () => {
    expect(result[0].team).toEqual('mock-id');
  });
});
