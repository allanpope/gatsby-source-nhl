import { Person } from './person';
import { Position } from './position';

export interface Roster {
  roster: RosterItem[];
}

export interface RosterItem {
  jerseyNumber: string;
  person: Person;
  position: Position;
}
