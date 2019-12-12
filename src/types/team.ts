import { NodeInput } from 'gatsby';

import { Venue } from './venue';
import { Division } from './division';
import { Conference } from './conference';
import { Franchise } from './franchise';
import { Roster } from './roster';

interface Team {
  abbreviation: string;
  name: string;
  teamName: string;
  shortName: string;
  locationName: string;
  firstYearOfPlay: string;
  officialSiteUrl: string;
  active: boolean;
}

export interface TeamData extends Team {
  id: number;
  venue: Venue;
  division: Division;
  conference: Conference;
  franchise: Franchise;
  roster: Roster;
}

export interface TeamNode extends Team, NodeInput {
  id: string;
  externalId: number;
  slug: string;
  images: {
    logo: {
      primaryLight: string;
      primaryDark: string;
    };
  };
}
