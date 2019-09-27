import { SourceNodesArgs } from "gatsby"

import { getTeamData } from "./nhl-api"

export const sourceNodes = async (
  { actions, cache, createContentDigest }: SourceNodesArgs,
  {}
) => {
  const data = await getTeamData()
  console.log("data: ", data)
}
