import { Team } from './team';

export interface Conference {
  id: string;
  slug: string;
  name: 'Eastern' | 'Western';
  teams: [Team];
}
