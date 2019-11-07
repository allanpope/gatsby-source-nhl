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
