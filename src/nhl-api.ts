import fetch from 'node-fetch';

export const getTeamsData = async () => {
  const response = await fetch(
    'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster',
  );

  return response.json();
};
