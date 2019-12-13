import { NodeInput } from 'gatsby';

export type ConferenceNames = 'Eastern' | 'Western';

interface Conference {
  name: string;
}
export interface ConferenceData extends Conference {
  id: number;
}

interface Division {
  name: string;
  nameShort: string;
  abbreviation: string;
}

export interface DivisionData extends Division {
  id: number;
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
  externalId: number;
  slug: string;
  teams: TeamNode[];
}

export interface DivisionNode extends Division, NodeInput {
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
