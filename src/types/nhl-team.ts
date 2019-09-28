interface TimeZone {
  zone: string
  offset: number
  tz: string
}

export interface Team {
  id: string
  abbreviation: string
  name: string
  teamName: string
  shortName: string
  locationName: string
  firstYearOfPlay: string
  officialSiteUrl: string
  active: boolean
  venue: Venue
}

export interface Venue {
  id: string
  name: string
  city: string
  timezone: TimeZone
  team: Team
}
