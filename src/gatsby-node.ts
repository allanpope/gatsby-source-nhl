import { SourceNodesArgs } from 'gatsby';

import { getTeamsData } from './nhl-api';
import createNodesForTeams from './create-nodes-for-teams';
import { Teams } from './types/nhl-team';

export const sourceNodes = async (createNodeHelpers: SourceNodesArgs) => {
  const { teams }: Teams = await getTeamsData();

  createNodesForTeams(teams, createNodeHelpers);
};
