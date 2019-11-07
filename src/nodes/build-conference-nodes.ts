import { SourceNodesArgs } from 'gatsby';
import slugify from 'slugify';
import { groupBy } from 'lodash';

import { Team } from '../types/team';

const buildConferenceNodes = (
  teams: Team[],
  { createNodeId, createContentDigest }: SourceNodesArgs,
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

  // const teamsByConferences = groupBy(
  //   teams,
  //   (team: Team) => team.conference.name,
  // );

  // console.log(teams);

  // // loop over every team
  // // create conf name
  // // assign teams to conf

  // return teams.map((team: Team) => ({
  //   id: createNodeId(team.conference.id),
  //   externalId: team.conference.id,
  //   name: team.conference.name,
  //   slug: slugify(team.conference.name, { lower: true }),
  //   teams: teamsByConferences[team.conference.name].map((team: Team) =>
  //     createNodeId(team.id),
  //   ),
  //   internal: {
  //     type: `NHLConference`,
  //     content: JSON.stringify(team.conference),
  //     contentDigest: createContentDigest(team.conference),
  //   },
  // }));
};

export default buildConferenceNodes;
