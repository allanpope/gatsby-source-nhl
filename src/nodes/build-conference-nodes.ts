import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from '../types/team';

const buildConferenceNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  const teamsByConferences = groupBy(
    teams,
    (team: Team) => team.conference.name,
  );

  return teams.map((team: Team) => ({
    id: createNodeId(team.conference.id),
    externalId: team.conference.id,
    name: team.conference.name,
    slug: slugify(team.conference.name, { lower: true }),
    teams: teamsByConferences[team.conference.name].map((team: Team) =>
      createNodeId(team.id),
    ),
    internal: {
      type: `NHLConference`,
      content: JSON.stringify(team.conference),
      contentDigest: createContentDigest(team.conference),
    },
  }));
};

export default buildConferenceNodes;
