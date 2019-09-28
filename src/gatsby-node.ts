import { SourceNodesArgs } from "gatsby"

import { getTeamData } from "./nhl-api"

interface Team {
  id: number
  name: string
}

export const sourceNodes = async (
  { actions, createNodeId, createContentDigest }: SourceNodesArgs,
  {}
) => {
  const { createNode } = actions

  const data = await getTeamData()

  data.teams.map((team: Team) => {
    const nodeId = createNodeId(`team-${team.id}`)
    const nodeContent = JSON.stringify(team)

    createNode({
      id: nodeId,
      name: team.name,
      internal: {
        type: `NHLTeam`,
        content: nodeContent,
        contentDigest: createContentDigest(team),
      },
    })
  })
}
