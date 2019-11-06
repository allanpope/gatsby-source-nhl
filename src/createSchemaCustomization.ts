import { SourceNodesArgs } from 'gatsby';

const createSchemaCustomization = ({ actions }: SourceNodesArgs) => {
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

export default createSchemaCustomization;
