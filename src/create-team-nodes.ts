import { groupBy } from 'lodash';
import { SourceNodesArgs } from 'gatsby';

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

export default createTeamNodes;
