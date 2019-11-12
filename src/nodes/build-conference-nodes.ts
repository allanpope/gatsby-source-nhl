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

  for (const [conference, teams] of Object.entries(teamsGroupedByConference)) {
    nodes.push({
      id: createNodeId(teams[0].conference.id),
      externalId: teams[0].conference.id,
      name: conference,
      slug: slugify(conference, { lower: true }),
      teams: teams.map((team: Team) => createNodeId(team.id)),
      internal: {
        type: 'NHLConference',
        content: JSON.stringify(teams[0].conference),
        contentDigest: createContentDigest(teams[0].conference),
      },
    });
  }

  return nodes;
};

export default buildConferenceNodes;
