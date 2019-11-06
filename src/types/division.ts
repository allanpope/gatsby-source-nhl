import { Team } from './team';

export interface Division {
  id: string;
  slug: string;
  name: 'Metropolitan' | 'Atlantic' | 'Central' | 'Pacific';
  nameShort: 'Metro' | 'ATL' | 'CEN' | 'PAC';
  abbreviation: 'M' | 'A' | 'C' | 'P';
  teams: [Team];
}
