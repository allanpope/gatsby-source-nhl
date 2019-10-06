import { groupBy, flattenDeep } from 'lodash';
import { SourceNodesArgs } from 'gatsby';

import { Team, Position, Roster, RosterItem } from './types/nhl-team';
import positions from './positions';

const createRoster = (
  roster: Roster,
  teamId: number | string,
  createNode: Function,
  createNodeId: Function,
  createContentDigest: Function,
) => {
  roster.roster.map((rosterItem: RosterItem) => {
    // Player
    createNode({
      ...rosterItem.person,
      id: createNodeId(rosterItem.person.id),
      externalId: rosterItem.person.id,
      images: {
        headshot: `https://nhl.bamcontent.com/images/headshots/current/168x168/${rosterItem.person.id}@3x.jpg`,
        action: `https://nhl.bamcontent.com/images/actionshots/${rosterItem.person.id}@3x.jpg`,
      },
      team___NODE: teamId,
      position___NODE: createNodeId(rosterItem.position.name),
      internal: {
        type: `NHLPlayer`,
        content: JSON.stringify(rosterItem.person),
        contentDigest: createContentDigest(rosterItem.person),
      },
    });

    // Roster
    createNode({
      id: createNodeId(rosterItem.person.id),
      externalId: rosterItem.person.id,
      jerseyNumber: rosterItem.jerseyNumber,
      player___NODE: createNodeId(rosterItem.person.id),
      team___NODE: teamId,
      position___NODE: createNodeId(rosterItem.position.name),
      internal: {
        type: `NHLRoster`,
        content: JSON.stringify(rosterItem),
        contentDigest: createContentDigest(rosterItem),
      },
    });
  });
};

const createPositions = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  const allRosterItems: RosterItem[] = flattenDeep(
    teams.map((team: Team) => team.roster.roster),
  );

  positions.map((position: Position) => {
    const filteredRosterItems = allRosterItems.filter((item: RosterItem) => {
      return item.position.name === position.name;
    });

    createNode({
      ...position,
      id: createNodeId(position.name),
      players___NODE: filteredRosterItems.map((rosterItem: RosterItem) =>
        createNodeId(rosterItem.person.id),
      ),
      internal: {
        type: `NHLPosition`,
        content: JSON.stringify(position),
        contentDigest: createContentDigest(position),
      },
    });
  });
};

const createTeams = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  const teamsByDivisions = groupBy(teams, (team: Team) => team.division.name);
  const teamsByConferences = groupBy(
    teams,
    (team: Team) => team.conference.name,
  );

  teams.map(
    ({ franchise, venue, division, roster, conference, ...team }: Team) => {
      const franchiseNodeId = createNodeId(franchise.franchiseId);
      const conferenceNodeId = createNodeId(conference.id);
      const divisionNodeId = createNodeId(division.id);
      const venueNodeId = createNodeId(venue.name);
      const teamNodeId = createNodeId(team.id);

      createRoster(
        roster,
        teamNodeId,
        createNode,
        createNodeId,
        createContentDigest,
      );

      // Franchise
      createNode({
        ...franchise,
        id: franchiseNodeId,
        externalId: franchise.franchiseId,
        team___NODE: teamNodeId,
        internal: {
          type: `NHLFranchise`,
          content: JSON.stringify(franchise),
          contentDigest: createContentDigest(franchise),
        },
      });

      // Venue
      createNode({
        ...venue,
        id: venueNodeId,
        externalId: venue.id,
        team___NODE: teamNodeId,
        internal: {
          type: `NHLVenue`,
          content: JSON.stringify(venue),
          contentDigest: createContentDigest(venue),
        },
      });

      // Team
      createNode({
        ...team,
        id: teamNodeId,
        externalId: team.id,
        images: {
          logo: {
            primary_light: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`,
            primary_dark: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${team.id}.svg`,
          },
        },
        players___NODE: roster.roster.map(item => createNodeId(item.person.id)),
        roster___NODE: roster.roster.map(item => createNodeId(item.person.id)),
        division___NODE: divisionNodeId,
        conference___NODE: conferenceNodeId,
        venue___NODE: venueNodeId,
        franchise___NODE: franchiseNodeId,
        internal: {
          type: `NHLTeam`,
          content: JSON.stringify(team),
          contentDigest: createContentDigest(team),
        },
      });

      // Division
      createNode({
        ...division,
        id: divisionNodeId,
        externalId: division.id,
        teams___NODE: teamsByDivisions[division.name].map(team =>
          createNodeId(team.id),
        ),
        internal: {
          type: `NHLDivision`,
          content: JSON.stringify(division),
          contentDigest: createContentDigest(division),
        },
      });

      // Conference
      createNode({
        ...conference,
        id: conferenceNodeId,
        externalId: conference.id,
        teams___NODE: teamsByConferences[conference.name].map(team =>
          createNodeId(team.id),
        ),
        internal: {
          type: `NHLConference`,
          content: JSON.stringify(conference),
          contentDigest: createContentDigest(conference),
        },
      });
    },
  );
};

const createNodesForTeams = (
  teams: Team[],
  createNodeHelpers: SourceNodesArgs,
) => {
  const { createNode } = createNodeHelpers.actions;

  createPositions(teams, createNode, createNodeHelpers);
  createTeams(teams, createNode, createNodeHelpers);
};

export default createNodesForTeams;
