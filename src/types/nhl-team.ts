interface TimeZone {
  id: string
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
  timeZone: TimeZone
  team: Team
}
