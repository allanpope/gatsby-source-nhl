import buildVenueNodes from '../../src/nodes/build-venue-nodes';
import teams from '../fixtures/teams';

describe('buildVenueNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(() => 1),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildVenueNodes(teams, createNodeHelpers);
  });

  it('returns a object for each venue', () => {
    expect(result).toEqual([
      expect.objectContaining({ name: 'Prudential Center' }),
      expect.objectContaining({ name: 'Barclays Center' }),
      expect.objectContaining({ name: 'Madison Square Garden' }),
      expect.objectContaining({ name: 'Wells Fargo Center' }),
      expect.objectContaining({ name: 'PPG Paints Arena' }),
      expect.objectContaining({ name: 'TD Garden' }),
      expect.objectContaining({ name: 'KeyBank Center' }),
      expect.objectContaining({ name: 'Bell Centre' }),
      expect.objectContaining({ name: 'Canadian Tire Centre' }),
      expect.objectContaining({ name: 'Scotiabank Arena' }),
      expect.objectContaining({ name: 'PNC Arena' }),
      expect.objectContaining({ name: 'BB&T Center' }),
      expect.objectContaining({ name: 'AMALIE Arena' }),
      expect.objectContaining({ name: 'Capital One Arena' }),
      expect.objectContaining({ name: 'United Center' }),
      expect.objectContaining({ name: 'Little Caesars Arena' }),
      expect.objectContaining({ name: 'Bridgestone Arena' }),
      expect.objectContaining({ name: 'Enterprise Center' }),
      expect.objectContaining({ name: 'Scotiabank Saddledome' }),
      expect.objectContaining({ name: 'Pepsi Center' }),
      expect.objectContaining({ name: 'Rogers Place' }),
      expect.objectContaining({ name: 'Rogers Arena' }),
      expect.objectContaining({ name: 'Honda Center' }),
      expect.objectContaining({ name: 'American Airlines Center' }),
      expect.objectContaining({ name: 'STAPLES Center' }),
      expect.objectContaining({ name: 'SAP Center at San Jose' }),
      expect.objectContaining({ name: 'Nationwide Arena' }),
      expect.objectContaining({ name: 'Xcel Energy Center' }),
      expect.objectContaining({ name: 'Bell MTS Place' }),
      expect.objectContaining({ name: 'Gila River Arena' }),
      expect.objectContaining({ name: 'T-Mobile Arena' }),
    ]);
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
        id: expect.any(Number),
        internal: {
          type: 'NHLVenue',
          content: expect.anything(),
          contentDigest: expect.anything(),
        },
      }),
    );
  });

  it('returns a object with venue fields', () => {
    expect(result[1]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        name: expect.any(String),
        city: expect.any(String),
        team: expect.any(Number),
        timeZone: {
          id: expect.any(String),
          offset: expect.any(Number),
          tz: expect.any(String),
        },
      }),
    );
  });

  it('returns null when a venue does not have an external id', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        externalId: null,
      }),
    );
  });

  it('returns the team id for the venue', () => {
    expect(result[0].team).toEqual(1);
  });
});
