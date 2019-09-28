interface TimeZone {
  id: string;
  offset: number;
  tz: string;
}

export interface Team {
  id: string;
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
  name: string;
  nameShort: string;
  abbreviation: string;
  teams: [Team];
}

interface Conference {
  id: string;
  name: string;
  teams: [Team];
}

interface Franchise {
  franchiseId: string;
  teamName: string;
  team: Team;
}
