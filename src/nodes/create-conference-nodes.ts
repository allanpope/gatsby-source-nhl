import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from '../types/team';

const createConferenceNodes = (
  teams: Team[],
  createNode: Function,
  { createNodeId, createContentDigest }: SourceNodesArgs,
): void => {
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
      teams: teamsByConferences[team.conference.name].map((team: Team) =>
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
