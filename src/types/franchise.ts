import { Team } from './team';

export interface Franchise {
  franchiseId: string;
  teamName: string;
  team: Team;
  slug: string;
}
