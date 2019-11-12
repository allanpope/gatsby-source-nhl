import { NodePluginArgs, NodeInput } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from '../types/team';

const buildConferenceNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): Array<NodeInput> => {
  const teamsGroupedByConference = groupBy(teams, 'conference.name');
  const nodes = [];

  for (const [key, value] of Object.entries(teamsGroupedByConference)) {
    nodes.push({
      id: createNodeId(value[0].conference.id),
      externalId: value[0].conference.id,
      name: key,
      slug: slugify(key, { lower: true }),
      teams: value.map((team: Team) => createNodeId(team.id)),
      internal: {
        type: 'NHLConference',
        content: JSON.stringify(value[0].conference),
        contentDigest: createContentDigest(value[0].conference),
      },
    });
  }

  return nodes;
};

export default buildConferenceNodes;
