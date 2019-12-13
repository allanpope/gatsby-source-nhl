import { NodePluginArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { TeamData, ConferenceNode, ConferenceNames } from '../types';

const buildConferenceNodes = (
  teams: TeamData[],
  { createNodeId, createContentDigest }: NodePluginArgs,
): ConferenceNode[] => {
  const teamsGroupedByConference = groupBy(teams, 'conference.name');
  const nodes = [];

  for (const [conference, teams] of Object.entries(teamsGroupedByConference)) {
    nodes.push({
      id: createNodeId(teams[0].conference.id),
      externalId: teams[0].conference.id,
      name: conference as ConferenceNames,
      slug: slugify(conference, { lower: true }),
      teams: teams.map((team: TeamData) => createNodeId(team.id)),
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
