import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from '../types/team';

const buildConferenceNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: NodePluginArgs,
) => {
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
        type: `NHLConference`,
        content: JSON.stringify(value),
        contentDigest: createContentDigest(value),
      },
    });
  }

  return nodes;
};

export default buildConferenceNodes;
