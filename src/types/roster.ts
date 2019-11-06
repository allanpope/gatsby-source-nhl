import { Person } from './person';
import { Position } from './position';

export interface Roster {
  roster: [RosterItem];
}

export interface RosterItem {
  jerseyNumber: number;
  person: Person;
  position: Position;
}
