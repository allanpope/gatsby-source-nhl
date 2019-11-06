import { SourceNodesArgs } from 'gatsby';

import { getTeamsData } from './nhl-api';
import createPlayerNodes from './create-player-nodes';
import createRosterNodes from './create-roster-nodes';
import createVenueNodes from './create-venue-nodes';
import createDivisionNodes from './create-division-nodes';
import createConferenceNodes from './create-conference-nodes';
import createPositionNodes from './create-position-nodes';
import createFranchiseNodes from './create-franchise-nodes';
import createTeamNodes from './create-team-nodes';

import { Teams } from './types/nhl-team';

export const sourceNodes = async (createNodeHelpers: SourceNodesArgs) => {
  const { teams }: Teams = await getTeamsData();
  const { createNode } = createNodeHelpers.actions;

  createRosterNodes(teams, createNode, createNodeHelpers);
  createPlayerNodes(teams, createNode, createNodeHelpers);
  createVenueNodes(teams, createNode, createNodeHelpers);
  createDivisionNodes(teams, createNode, createNodeHelpers);
  createConferenceNodes(teams, createNode, createNodeHelpers);
  createPositionNodes(teams, createNode, createNodeHelpers);
  createFranchiseNodes(teams, createNode, createNodeHelpers);
  createTeamNodes(teams, createNode, createNodeHelpers);
};

export const createSchemaCustomization = ({ actions }: any) => {
  const { createTypes } = actions;

  createTypes(`
    type NHLRosterItem implements Node {
      player: NHLPlayer @link,
      position: NHLPosition @link,
      team: NHLTeam @link
    }

    type NHLPosition implements Node {
      players: [NHLPlayer] @link
    }

    type NHLPlayer implements Node {
      position: NHLPosition @link
      team: NHLTeam @link
    }

    type NHLFranchise implements Node {
      team: NHLTeam @link
    }

    type NHLDivision implements Node {
      teams: [NHLTeam] @link
    }

    type NHLConference implements Node {
      teams: [NHLTeam] @link
    }

    type NHLVenue implements Node {
      team: NHLTeam @link
    }
  `);
};
