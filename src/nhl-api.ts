import fetch from "node-fetch"

export const getTeamData = async () => {
  const response = await fetch("https://statsapi.web.nhl.com/api/v1/teams")

  return response.json()
}
