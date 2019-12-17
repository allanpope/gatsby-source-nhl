import buildRosterNodes from '../../src/nodes/build-roster-nodes';
import teams from '../fixtures/teams';

describe('buildRosterNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(id => id),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildRosterNodes(teams, createNodeHelpers);
  });

  it('returns a object for each roster item', () => {
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ jerseyNumber: '5' }),
        expect.objectContaining({ jerseyNumber: '63' }),
        expect.objectContaining({ jerseyNumber: '77' }),
      ]),
    );
  });

  it('calls createContentDigest for each roster item', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(745);
  });

  it('calls createNodeId with the player id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].roster.roster[0].person.id,
    );
  });

  it('calls createNodeId with the team id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(teams[0].id);
  });

  it('calls createNodeId with the position name', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].roster.roster[0].position.name,
    );
  });

  it('returns objects with the required gatsby shape', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        internal: {
          type: 'NHLRoster',
          content: expect.anything(),
          contentDigest: 'mock-digest',
        },
      }),
    );
  });

  it('returns the stringified value of the roster item', () => {
    expect(result[0].internal.content).toEqual(
      JSON.stringify(teams[0].roster.roster[0]),
    );
  });

  it('returns a object with roster item shape', () => {
    expect(result[1]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        jerseyNumber: expect.any(String),
        player: expect.any(Number),
        team: expect.any(Number),
        position: expect.any(String),
      }),
    );
  });
});
