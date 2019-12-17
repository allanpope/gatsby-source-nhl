import buildPositionNodes from '../../src/nodes/build-position-nodes';
import teams from '../fixtures/teams';
import positions from '../../src/data/positions';
import { PositionData } from '../../src/types';

describe('buildPositionNodes', () => {
  let result: any;
  const createNodeHelpers: any = {
    createNodeId: jest.fn(id => id),
    createContentDigest: jest.fn(() => 'mock-digest'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    result = buildPositionNodes(teams, createNodeHelpers);
  });

  fit('returns a object for each positon', () => {
    expect(result).toEqual([
      expect.objectContaining({ name: 'Goalie' }),
      expect.objectContaining({ name: 'Defenseman' }),
      expect.objectContaining({ name: 'Center' }),
      expect.objectContaining({ name: 'Right Wing' }),
      expect.objectContaining({ name: 'Left Wing' }),
    ]);
  });

  it('calls createContentDigest for each position', () => {
    expect(createNodeHelpers.createContentDigest).toHaveBeenCalledTimes(5);
  });

  it('calls createNodeId with the position name', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith('Goalie');
  });

  it('calls createNodeId with the player ids', () => {
    expect(createNodeHelpers.createNodeId).toHaveBeenCalledWith(
      teams[0].roster.roster[0].person.id,
    );
  });

  it('returns objects with the required gatsby shape', () => {
    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        internal: {
          type: 'NHLPosition',
          content: expect.anything(),
          contentDigest: 'mock-digest',
        },
      }),
    );
  });

  it('returns the stringified value of positon', () => {
    expect(result[0].internal.content).toEqual(JSON.stringify(positions[0]));
  });

  it('returns objects with position shape', () => {
    expect(result[1]).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        type: expect.any(String),
        abbreviation: expect.any(String),
        slug: expect.any(String),
        players: expect.any(Array),
      }),
    );
  });

  it('creates a slug for each position using the name', () => {
    expect(result).toEqual([
      expect.objectContaining({
        slug: 'goalie',
      }),
      expect.objectContaining({
        slug: 'defenseman',
      }),
      expect.objectContaining({
        slug: 'center',
      }),
      expect.objectContaining({
        slug: 'right-wing',
      }),
      expect.objectContaining({
        slug: 'left-wing',
      }),
    ]);
  });

  describe('goalie players', () => {
    let goalie: any;

    beforeEach(() => {
      goalie = result.find(
        (position: PositionData) => position.name === 'Goalie',
      );
    });

    it('returns goalie player ids', () => {
      expect(goalie.players).toEqual(
        expect.arrayContaining([8471239, 8478406, 8471306]),
      );
    });

    it('does not return non goalie player ids', () => {
      expect(goalie.players).not.toEqual(
        expect.arrayContaining([8473504, 8473544, 8473544]),
      );
    });
  });

  describe('defenseman players', () => {
    let defenseman: any;

    beforeEach(() => {
      defenseman = result.find(
        (position: PositionData) => position.name === 'Defenseman',
      );
    });

    it('returns defenseman player ids', () => {
      expect(defenseman.players).toEqual(
        expect.arrayContaining([8477506, 8476429, 8476917]),
      );
    });

    it('does not return non defenseman player ids', () => {
      expect(defenseman.players).not.toEqual(
        expect.arrayContaining([8471239, 8477527, 8480789]),
      );
    });
  });

  describe('center players', () => {
    let center: any;

    beforeEach(() => {
      center = result.find(
        (position: PositionData) => position.name === 'Center',
      );
    });

    it('returns center player ids', () => {
      expect(center.players).toEqual(
        expect.arrayContaining([8474230, 8475184, 8475735]),
      );
    });

    it('does not return non center player ids', () => {
      expect(center.players).not.toEqual(
        expect.arrayContaining([8475855, 8477402, 8477950]),
      );
    });
  });

  describe('left wing players', () => {
    let leftWing: any;

    beforeEach(() => {
      leftWing = result.find(
        (position: PositionData) => position.name === 'Left Wing',
      );
    });

    it('returns left wing player ids', () => {
      expect(leftWing.players).toEqual(
        expect.arrayContaining([8477402, 8477962, 8476872]),
      );
    });

    it('does not return non left wing player ids', () => {
      expect(leftWing.players).not.toEqual(
        expect.arrayContaining([8475855, 8477402, 8477950]),
      );
    });
  });

  describe('ring wing players', () => {
    let rightWing: any;

    beforeEach(() => {
      rightWing = result.find(
        (position: PositionData) => position.name === 'Right Wing',
      );
    });

    it('returns right wing player ids', () => {
      expect(rightWing.players).toEqual(
        expect.arrayContaining([8473485, 8474161, 8475763]),
      );
    });

    it('does not return non right wing player ids', () => {
      expect(rightWing.players).not.toEqual(
        expect.arrayContaining([8470880, 8477962, 8471702]),
      );
    });
  });
});
