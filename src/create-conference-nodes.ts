import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from './types/nhl-team';

const createConferenceNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
) => {
  const teamsByConferences = groupBy(
    teams,
    (team: Team) => team.conference.name,
  );

  teams.map((team: Team) => {
    createNode({
      id: createNodeId(team.conference.id),
      externalId: team.conference.id,
      name: team.conference.name,
      slug: slugify(team.conference.name, { lower: true }),
      teams: teamsByConferences[team.conference.name].map((team: any) =>
        createNodeId(team.id),
      ),
      internal: {
        type: `NHLConference`,
        content: JSON.stringify(team.conference),
        contentDigest: createContentDigest(team.conference),
      },
    });
  });
};

export default createConferenceNodes;
