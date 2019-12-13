import fetch from 'node-fetch';

import { TeamData } from '../types/team';

export const getTeamsData = async (): Promise<TeamData[]> => {
  try {
    const response = await fetch(
      'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster',
    );
    const data = await response.json();
    return data.teams;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
