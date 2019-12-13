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

interface Player {
  fullName: string;
}

interface Position {
  name: string;
  type: string;
  abbreviation: string;
}

interface TimeZone {
  id: string;
  offset: number;
  tz: string;
}

interface Venue {
  name: string;
  city: string;
  timeZone: TimeZone;
}

interface Roster {}

interface RosterItem {
  jerseyNumber: string;
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

export interface VenueData extends Venue {
  id: number;
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

export interface PositionData extends Position {}

export interface RosterItemData extends RosterItem {
  position: PositionData;
  person: {
    id: number;
    fullName: string;
  };
}

export interface RosterData extends Roster {
  roster: RosterItemData[];
}

export interface TeamData extends Team {
  id: number;
  venue: VenueData;
  division: DivisionData;
  conference: ConferenceData;
  franchise: FranchiseData;
  roster: RosterData;
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

export interface PlayerNode extends Player, NodeInput {
  externalId: number;
  slug: string;
  team: TeamNode;
  position: string;
  images: {
    action: string;
    headshot: string;
  };
}

export interface PositionNode extends Position, NodeInput {
  slug: string;
  players: PlayerNode[];
}

export interface VenueNode extends Venue, NodeInput {
  externalId: number;
  team: TeamNode;
}

export interface RosterItemNode extends RosterItem, NodeInput {
  externalId: number;
  team: TeamNode;
  player: PlayerNode;
}
