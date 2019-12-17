import { NodePluginArgs } from 'gatsby';

const createSchemaCustomization = ({ actions }: NodePluginArgs) => {
  const { createTypes } = actions;

  createTypes(`
    type NHLRoster implements Node {
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

  return null;
};

export default createSchemaCustomization;
