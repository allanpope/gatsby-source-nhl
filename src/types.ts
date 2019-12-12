declare module 'gatsby-source-nhl' {
  export interface Conference {
    id: number;
    name: 'Eastern' | 'Western';
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

  export interface TeamNode extends Team {
    externalId: string;
    slug: string;
    images: {
      logo: {
        primaryLight: string;
        primaryDark: string;
      };
    };
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
}
