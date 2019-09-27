import { SourceNodesArgs } from "gatsby"

export const sourceNodes = async (
  { actions, cache, createContentDigest }: SourceNodesArgs,
  {}
) => {
  console.log("test")
}
