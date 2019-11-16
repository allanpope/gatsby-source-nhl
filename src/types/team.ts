import { Venue } from './venue';
import { Division } from './division';
import { Conference } from './conference';
import { Franchise } from './franchise';
import { Roster } from './roster';

export interface Team {
  id: number;
  abbreviation: string;
  name: string;
  teamName: string;
  shortName: string;
  locationName: string;
  firstYearOfPlay: string;
  officialSiteUrl: string;
  active: boolean;
  venue: Venue;
  division: Division;
  conference: Conference;
  franchise: Franchise;
  roster: Roster;
}
