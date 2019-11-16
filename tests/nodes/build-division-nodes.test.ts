import buildDivisionNodes from '../../src/nodes/build-division-nodes';
import teams from '../fixtures/teams';

describe('buildDivisionNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(id => id),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildDivisionNodes(teams, createNodeHelpers);
  });

  it('returns a object for each division', () => {
    expect(result).toEqual([
      expect.objectContaining({ name: 'Metropolitan' }),
      expect.objectContaining({ name: 'Atlantic' }),
      expect.objectContaining({ name: 'Central' }),
      expect.objectContaining({ name: 'Pacific' }),
    ]);
  });

  it('calls createContentDigest for each division', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(4);
  });

  it('calls createNodeId with the division id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].division.id,
    );
  });

  it('calls createNodeId with the team id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(teams[0].id);
  });

  it('returns objects with the required gatsby shape', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        internal: {
          type: 'NHLDivision',
          content: expect.anything(),
          contentDigest: 'mock-digest',
        },
      }),
    );
  });

  it('returns the stringified value of the team division', () => {
    expect(result[0].internal.content).toEqual(
      JSON.stringify(teams[0].division),
    );
  });

  it('returns objects with division shape', () => {
    expect(result[1]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        name: expect.any(String),
        nameShort: expect.any(String),
        abbreviation: expect.any(String),
        slug: expect.any(String),
        teams: expect.any(Array),
      }),
    );
  });
});
