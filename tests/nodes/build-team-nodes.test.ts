import buildTeamNodes from '../../src/nodes/build-team-nodes';
import teams from '../fixtures/teams';

describe('buildTeamNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(() => 1),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildTeamNodes(teams, createNodeHelpers);
  });

  it('returns a object for each team', () => {
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Anaheim Ducks' }),
        expect.objectContaining({ name: 'Arizona Coyotes' }),
        expect.objectContaining({ name: 'Boston Bruins' }),
        expect.objectContaining({ name: 'Buffalo Sabres' }),
        expect.objectContaining({ name: 'Calgary Flames' }),
        expect.objectContaining({ name: 'Carolina Hurricanes' }),
        expect.objectContaining({ name: 'Chicago Blackhawks' }),
        expect.objectContaining({ name: 'Colorado Avalanche' }),
        expect.objectContaining({ name: 'Columbus Blue Jackets' }),
        expect.objectContaining({ name: 'Dallas Stars' }),
        expect.objectContaining({ name: 'Detroit Red Wings' }),
        expect.objectContaining({ name: 'Edmonton Oilers' }),
        expect.objectContaining({ name: 'Florida Panthers' }),
        expect.objectContaining({ name: 'Los Angeles Kings' }),
        expect.objectContaining({ name: 'Minnesota Wild' }),
        expect.objectContaining({ name: 'Montréal Canadiens' }),
        expect.objectContaining({ name: 'Nashville Predators' }),
        expect.objectContaining({ name: 'New Jersey Devils' }),
        expect.objectContaining({ name: 'New York Islanders' }),
        expect.objectContaining({ name: 'New York Rangers' }),
        expect.objectContaining({ name: 'Ottawa Senators' }),
        expect.objectContaining({ name: 'Philadelphia Flyers' }),
        expect.objectContaining({ name: 'Pittsburgh Penguins' }),
        expect.objectContaining({ name: 'San Jose Sharks' }),
        expect.objectContaining({ name: 'St. Louis Blues' }),
        expect.objectContaining({ name: 'Tampa Bay Lightning' }),
        expect.objectContaining({ name: 'Toronto Maple Leafs' }),
        expect.objectContaining({ name: 'Vancouver Canucks' }),
        expect.objectContaining({ name: 'Vegas Golden Knights' }),
        expect.objectContaining({ name: 'Washington Capitals' }),
        expect.objectContaining({ name: 'Winnipeg Jets' }),
      ]),
    );
  });

  it('calls createContentDigest for each team', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(31);
  });

  it('calls createNodeId with the team id', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(teams[0].id);
  });

  it('returns objects with the required gatsby shape', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        internal: {
          type: 'NHLTeam',
          content: expect.anything(),
          contentDigest: 'mock-digest',
        },
      }),
    );
  });

  it('returns the stringified value of the team', () => {
    expect(result[0].internal.content).toEqual(JSON.stringify(teams[0]));
  });

  it('returns a object with team shape', () => {
    expect(result[1]).toEqual(
      expect.objectContaining({
        externalId: expect.any(Number),
        name: expect.any(String),
        abbreviation: expect.any(String),
        teamName: expect.any(String),
        locationName: expect.any(String),
        firstYearOfPlay: expect.any(String),
        shortName: expect.any(String),
        officialSiteUrl: expect.any(String),
        active: expect.any(Boolean),
        slug: expect.any(String),
        images: {
          logo: {
            primaryLight: expect.any(String),
            primaryDark: expect.any(String),
          },
        },
      }),
    );
  });

  it('creates a slug for each team using the name', () => {
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          slug: 'new-york-islanders',
        }),
        expect.objectContaining({
          slug: 'arizona-coyotes',
        }),
      ]),
    );
  });

  it('creates a image url for both logo variants using the team id', () => {
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          images: {
            logo: {
              primaryLight: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teams[0].id}.svg`,
              primaryDark: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${teams[0].id}.svg`,
            },
          },
        }),
        expect.objectContaining({
          images: {
            logo: {
              primaryLight: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teams[1].id}.svg`,
              primaryDark: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${teams[1].id}.svg`,
            },
          },
        }),
      ]),
    );
  });
});
