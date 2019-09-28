import { SourceNodesArgs } from 'gatsby';
import { groupBy } from 'lodash';

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

  data.teams.map((team: Team) => {
    const franchiseNodeId = createNodeId(
      `franchise-${team.franchise.franchiseId}`,
    );
    const conferenceNodeId = createNodeId(`conference-${team.conference.id}`);
    const divisionNodeId = createNodeId(`division-${team.division.id}`);
    const venueNodeId = createNodeId(`venue-${team.venue.id}`);
    const teamNodeId = createNodeId(`team-${team.id}`);

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
      ['team___NODE']: divisions[team.division.name].map(team =>
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
      ['team___NODE']: conferences[team.conference.name].map(team =>
        createNodeId(`team-${team.id}`),
      ),
      internal: {
        type: `NHLConference`,
        content: JSON.stringify(team.conference),
        contentDigest: createContentDigest(team.conference),
      },
    });
  });
};
