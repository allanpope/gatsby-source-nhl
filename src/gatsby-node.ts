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
    const nodeId = createNodeId(`team-${team.id}`)
    const nodeContent = JSON.stringify(team)

    createNode({
      id: nodeId,
      name: team.name,
      abbreviation: team.abbreviation,
      teamName: team.teamName,
      shortName: team.shortName,
      locationName: team.locationName,
      firstYearOfPlay: team.firstYearOfPlay,
      officialSiteUrl: team.officialSiteUrl,
      active: team.active,
      internal: {
        type: `NHLTeam`,
        content: nodeContent,
        contentDigest: createContentDigest(team),
      },
    })
  })
}
