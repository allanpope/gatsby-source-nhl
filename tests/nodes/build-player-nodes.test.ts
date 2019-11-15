import buildPlayerNodes from '../../src/nodes/build-player-nodes';
import teams from '../fixtures/teams';

describe('buildPlayerNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(id => id),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildPlayerNodes(teams, createNodeHelpers);
  });

  it('returns a objects for each player', () => {
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fullName: 'Connor Carrick' }),
        expect.objectContaining({ fullName: 'Matt Tennyson' }),
        expect.objectContaining({ fullName: 'Jesper Boqvist' }),
        expect.objectContaining({ fullName: 'Josh Bailey' }),
        expect.objectContaining({ fullName: 'Will Butcher' }),
        expect.objectContaining({ fullName: 'Johnny Boychuk' }),
      ]),
    );
  });

  it('calls createContentDigest for each player', () => {
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

  it('returns objects with the required gatsby shape', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        internal: {
          type: 'NHLPlayer',
          content: expect.anything(),
          contentDigest: 'mock-digest',
        },
      }),
    );
  });

  it('returns the stringified value of the team player', () => {
    expect(result[0].internal.content).toEqual(
      JSON.stringify(teams[0].roster.roster[0].person),
    );
  });

  it('returns objects with player shape', () => {
    expect(result[1]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        fullName: expect.any(String),
        slug: expect.any(String),
        images: {
          headshot: expect.any(String),
          action: expect.any(String),
        },
        team: expect.any(Number),
        position: expect.any(String),
      }),
    );
  });

  it('creates a slug for each player using the players full name', () => {
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          slug: 'cory-schneider',
        }),
        expect.objectContaining({
          slug: 'jesper-bratt',
        }),
        expect.objectContaining({
          slug: 'thomas-greiss',
        }),
      ]),
    );
  });
});
