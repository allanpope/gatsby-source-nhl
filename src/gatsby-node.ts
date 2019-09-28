import { SourceNodesArgs } from "gatsby"

import { getTeamsData } from "./nhl-api"
import { Team } from "./types/nhl-team"

export const sourceNodes = async (
  { actions, createNodeId, createContentDigest }: SourceNodesArgs,
  {}
) => {
  const { createNode } = actions

  const data = await getTeamsData()

  data.teams.map((team: Team) => {
    const venueNodeId = createNodeId(`venue-${team.venue.id}`)
    const teamNodeId = createNodeId(`team-${team.id}`)

    createNode({
      id: venueNodeId,
      name: team.venue.name,
      city: team.venue.city,
      team___NODE: teamNodeId,
      internal: {
        type: `NHLVenue`,
        content: JSON.stringify(team.venue),
        contentDigest: createContentDigest(team.venue),
      },
    })

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
      venue___NODE: venueNodeId,
      internal: {
        type: `NHLTeam`,
        content: JSON.stringify(team),
        contentDigest: createContentDigest(team),
      },
    })
  })
}
