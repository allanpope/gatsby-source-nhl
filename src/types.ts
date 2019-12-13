import { NodeInput } from 'gatsby';

interface Conference {
  name: string;
}

interface Division {
  name: string;
  nameShort: string;
  abbreviation: string;
}

interface Franchise {
  teamName: string;
}

export interface ConferenceData extends Conference {
  id: number;
}

export interface DivisionData extends Division {
  id: number;
}

export interface FranchiseData extends Franchise {
  franchiseId: number;
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
  division: DivisionData;
  conference: ConferenceData;
  franchise: FranchiseData;
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

export interface FranchiseNode extends Franchise, NodeInput {
  externalId: number;
  slug: string;
  team: TeamNode;
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
