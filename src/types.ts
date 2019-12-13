import { NodeInput } from 'gatsby';

export type ConferenceNames = 'Eastern' | 'Western';

export interface Conference {
  name: ConferenceNames;
}
export interface ConferenceData extends Conference {
  id: number;
}

export interface Division {
  id: number;
  name: 'Metropolitan' | 'Atlantic' | 'Central' | 'Pacific';
  nameShort: 'Metro' | 'ATL' | 'CEN' | 'PAC';
  abbreviation: 'M' | 'A' | 'C' | 'P';
}

export interface Franchise {
  franchiseId: number;
  teamName: string;
}

export interface Person {
  id: number;
  fullName: string;
}

export interface Position {
  name: string;
  type: string;
  abbreviation: string;
}

export interface Roster {
  roster: RosterItem[];
}

export interface RosterItem {
  jerseyNumber: string;
  person: Person;
  position: Position;
}

export interface Roster {
  roster: RosterItem[];
}

export interface RosterItem {
  jerseyNumber: string;
  person: Person;
  position: Position;
}

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
  conference: ConferenceData;
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

export interface ConferenceNode extends Conference, NodeInput {
  id: string;
  externalId: number;
  slug: string;
  teams: TeamNode[];
}

interface TimeZone {
  id: string;
  offset: number;
  tz: string;
}

export interface Venue {
  id?: number;
  name: string;
  city: string;
  timeZone: TimeZone;
}
