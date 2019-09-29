import { SourceNodesArgs } from 'gatsby';
import { groupBy, flattenDeep } from 'lodash';

import { getTeamsData } from './nhl-api';
import { Team } from './types/nhl-team';

export const sourceNodes = async (
  { actions, createNodeId, createContentDigest }: SourceNodesArgs,
  {},
) => {
  const { createNode } = actions;

  const data = await getTeamsData();

  const divisions = groupBy(data.teams, (team: Team) => team.division.name);
  const conferences = groupBy(data.teams, (team: Team) => team.conference.name);
  const positions = [
    {
      name: 'Goalie',
      type: 'Goalie',
      abbreviation: 'C',
    },
    {
      name: 'Defenseman',
      type: 'Defenseman',
      abbreviation: 'D',
    },
    {
      name: 'Center',
      type: 'Forward',
      abbreviation: 'C',
    },
    {
      name: 'Right Wing',
      type: 'Forward',
      abbreviation: 'R',
    },
    {
      name: 'Left Wing',
      type: 'Forward',
      abbreviation: 'L',
    },
  ];

  data.teams.map((team: Team) => {
    const franchiseNodeId = createNodeId(
      `franchise-${team.franchise.franchiseId}`,
    );
    const conferenceNodeId = createNodeId(`conference-${team.conference.id}`);
    const divisionNodeId = createNodeId(`division-${team.division.id}`);
    const venueNodeId = createNodeId(`venue-${team.venue.id}`);
    const teamNodeId = createNodeId(`team-${team.id}`);

    team.roster.roster.map(item => {
      const playerNodeId = createNodeId(`player-${item.person.id}`);

      // Player
      createNode({
        id: playerNodeId,
        fullName: item.person.fullName,
        team___NODE: teamNodeId,
        position___NODE: createNodeId(`position-${item.position.name}`),
        internal: {
          type: `NHLPlayer`,
          content: JSON.stringify(item.person),
          contentDigest: createContentDigest(item.person),
        },
      });

      // Roster
      createNode({
        id: createNodeId(`roster-${item.person.id}`),
        jerseyNumber: item.jerseyNumber,
        player___NODE: playerNodeId,
        team___NODE: teamNodeId,
        position___NODE: createNodeId(`position-${item.position.name}`),
        internal: {
          type: `NHLRoster`,
          content: JSON.stringify(item),
          contentDigest: createContentDigest(item),
        },
      });
    });

    // ---

    // Franchise
    createNode({
      id: franchiseNodeId,
      name: team.franchise.teamName,
      team___NODE: teamNodeId,
      internal: {
        type: `NHLFranchise`,
        content: JSON.stringify(team.franchise),
        contentDigest: createContentDigest(team.franchise),
      },
    });

    // Venue
    createNode({
      id: venueNodeId,
      name: team.venue.name,
      city: team.venue.city,
      timeZone: {
        zone: team.venue.timeZone.id,
        offset: team.venue.timeZone.offset,
        tz: team.venue.timeZone.tz,
      },
      team___NODE: teamNodeId,
      internal: {
        type: `NHLVenue`,
        content: JSON.stringify(team.venue),
        contentDigest: createContentDigest(team.venue),
      },
    });

    // Team
    createNode({
      id: teamNodeId,
      name: team.name,
      abbreviation: team.abbreviation,
      teamName: team.teamName,
      shortName: team.shortName,
      locationName: team.locationName,
      firstYearOfPlay: team.firstYearOfPlay,
      officialSiteUrl: team.officialSiteUrl,
      active: team.active,
      ['players___NODE']: team.roster.roster.map(item =>
        createNodeId(`player-${item.person.id}`),
      ),
      ['roster___NODE']: team.roster.roster.map(item =>
        createNodeId(`roster-${item.person.id}`),
      ),
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
      id: divisionNodeId,
      name: team.division.name,
      nameShort: team.division.nameShort,
      abbreviation: team.division.abbreviation,
      ['teams___NODE']: divisions[team.division.name].map(team =>
        createNodeId(`team-${team.id}`),
      ),
      internal: {
        type: `NHLDivision`,
        content: JSON.stringify(team.division),
        contentDigest: createContentDigest(team.division),
      },
    });

    // Conference
    createNode({
      id: conferenceNodeId,
      name: team.conference.name,
      ['teams___NODE']: conferences[team.conference.name].map(team =>
        createNodeId(`team-${team.id}`),
      ),
      internal: {
        type: `NHLConference`,
        content: JSON.stringify(team.conference),
        contentDigest: createContentDigest(team.conference),
      },
    });
  });

  positions.map(position => {
    const rosters = data.teams.map((team: any) => team.roster.roster);
    const rosterItems = flattenDeep(
      rosters.map((roster: any) => roster.map((item: any) => item)),
    );
    const rosterGroupedByPositions = groupBy(
      rosterItems,
      (item: any) => item.position.name,
    );

    createNode({
      id: createNodeId(`position-${position.name}`),
      name: position.name,
      type: position.type,
      abbreviation: position.abbreviation,
      ['players___NODE']: rosterGroupedByPositions[position.name].map(
        (roster: any) => createNodeId(`player-${roster.person.id}`),
      ),
      internal: {
        type: `NHLPosition`,
        content: JSON.stringify(position),
        contentDigest: createContentDigest(position),
      },
    });
  });
};
