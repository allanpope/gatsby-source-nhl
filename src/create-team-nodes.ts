import { groupBy } from 'lodash';
import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';

import { Team } from './types/nhl-team';

const createTeamNodes = (
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

      // Franchise
      createNode({
        id: franchiseNodeId,
        slug: slugify(franchise.teamName, { lower: true }),
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
        id: venueNodeId,
        externalId: venue.id,
        name: venue.name,
        city: venue.city,
        timeZone: venue.timeZone,
        team___NODE: teamNodeId,
        internal: {
          type: `NHLVenue`,
          content: JSON.stringify(venue),
          contentDigest: createContentDigest(venue),
        },
      });

      // Team
      createNode({
        id: teamNodeId,
        externalId: team.id,
        name: team.name,
        abbreviation: team.abbreviation,
        teamName: team.teamName,
        locationName: team.locationName,
        firstYearOfPlay: team.firstYearOfPlay,
        shortName: team.shortName,
        officialSiteUrl: team.officialSiteUrl,
        active: team.active,
        slug: slugify(team.name, { lower: true }),
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
        id: divisionNodeId,
        externalId: division.id,
        name: division.name,
        nameShort: division.nameShort,
        abbreviation: division.abbreviation,
        slug: slugify(division.name, { lower: true }),
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
        id: conferenceNodeId,
        externalId: conference.id,
        name: conference.name,
        slug: slugify(conference.name, { lower: true }),
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

export default createTeamNodes;
