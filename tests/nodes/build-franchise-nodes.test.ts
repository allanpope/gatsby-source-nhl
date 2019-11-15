import buildFranchiseNodes from '../../src/nodes/build-franchise-nodes';
import teams from '../fixtures/teams';

describe('buildFranchiseNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(id => id),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildFranchiseNodes(teams, createNodeHelpers);
  });

  it('returns a object for each franchise', () => {
    expect(result).toEqual([
      expect.objectContaining({ teamName: 'Devils' }),
      expect.objectContaining({ teamName: 'Islanders' }),
      expect.objectContaining({ teamName: 'Rangers' }),
      expect.objectContaining({ teamName: 'Flyers' }),
      expect.objectContaining({ teamName: 'Penguins' }),
      expect.objectContaining({ teamName: 'Bruins' }),
      expect.objectContaining({ teamName: 'Sabres' }),
      expect.objectContaining({ teamName: 'Canadiens' }),
      expect.objectContaining({ teamName: 'Senators' }),
      expect.objectContaining({ teamName: 'Maple Leafs' }),
      expect.objectContaining({ teamName: 'Hurricanes' }),
      expect.objectContaining({ teamName: 'Panthers' }),
      expect.objectContaining({ teamName: 'Lightning' }),
      expect.objectContaining({ teamName: 'Capitals' }),
      expect.objectContaining({ teamName: 'Blackhawks' }),
      expect.objectContaining({ teamName: 'Red Wings' }),
      expect.objectContaining({ teamName: 'Predators' }),
      expect.objectContaining({ teamName: 'Blues' }),
      expect.objectContaining({ teamName: 'Flames' }),
      expect.objectContaining({ teamName: 'Avalanche' }),
      expect.objectContaining({ teamName: 'Oilers' }),
      expect.objectContaining({ teamName: 'Canucks' }),
      expect.objectContaining({ teamName: 'Ducks' }),
      expect.objectContaining({ teamName: 'Stars' }),
      expect.objectContaining({ teamName: 'Kings' }),
      expect.objectContaining({ teamName: 'Sharks' }),
      expect.objectContaining({ teamName: 'Blue Jackets' }),
      expect.objectContaining({ teamName: 'Wild' }),
      expect.objectContaining({ teamName: 'Jets' }),
      expect.objectContaining({ teamName: 'Coyotes' }),
      expect.objectContaining({ teamName: 'Golden Knights' }),
    ]);
  });

  it('calls createContentDigest for each franchise', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(31);
  });

  it('calls createNodeId with the franchise id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].franchise.franchiseId,
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
          type: 'NHLFranchise',
          content: expect.anything(),
          contentDigest: 'mock-digest',
        },
      }),
    );
  });

  it('returns the stringified value of the team franchise', () => {
    expect(result[0].internal.content).toEqual(
      JSON.stringify(teams[0].franchise),
    );
  });

  it('returns objects with franchise shape', () => {
    expect(result[1]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        teamName: expect.any(String),
        team: expect.any(Number),
      }),
    );
  });

  it('creates a slug for each franchise using the team name', () => {
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          slug: 'devils',
        }),
        expect.objectContaining({
          slug: 'maple-leafs',
        }),
        expect.objectContaining({
          slug: 'sabres',
        }),
      ]),
    );
  });
});
