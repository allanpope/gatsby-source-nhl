import { Team } from './team';

interface TimeZone {
  id: string;
  offset: number;
  tz: string;
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  timeZone: TimeZone;
  team: Team;
}
