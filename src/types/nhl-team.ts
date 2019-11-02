interface TimeZone {
  id: string;
  offset: number;
  tz: string;
}

export interface Teams {
  teams: Team[];
}

export interface Team {
  id: string;
  slug: string;
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

interface Venue {
  id: string;
  name: string;
  city: string;
  timeZone: TimeZone;
  team: Team;
}

interface Division {
  id: string;
  slug: string;
  name: 'Metropolitan' | 'Atlantic' | 'Central' | 'Pacific';
  nameShort: 'Metro' | 'ATL' | 'CEN' | 'PAC';
  abbreviation: 'M' | 'A' | 'C' | 'P';
  teams: [Team];
}

interface Conference {
  id: string;
  slug: string;
  name: 'Eastern' | 'Western';
  teams: [Team];
}

interface Franchise {
  franchiseId: string;
  teamName: string;
  team: Team;
  slug: string;
}

export interface Roster {
  roster: [RosterItem];
}

export interface RosterItem {
  jerseyNumber: number;
  person: Person;
  position: Position;
}

interface Person {
  id: string;
  fullName: string;
  slug: string;
}
export interface Position {
  name: string;
  type: string;
  abbreviation: string;
}
