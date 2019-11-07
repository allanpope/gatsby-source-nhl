const teams = [
  {
    id: 1,
    name: 'New Jersey Devils',
    link: '/api/v1/teams/1',
    venue: {
      name: 'Prudential Center',
      link: '/api/v1/venues/null',
      city: 'Newark',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'NJD',
    teamName: 'Devils',
    locationName: 'New Jersey',
    firstYearOfPlay: '1982',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 23,
      teamName: 'Devils',
      link: '/api/v1/franchises/23',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8476941,
            fullName: 'Connor Carrick',
            link: '/api/v1/people/8476941',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471233,
            fullName: 'Travis Zajac',
            link: '/api/v1/people/8471233',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471239,
            fullName: 'Cory Schneider',
            link: '/api/v1/people/8471239',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8472382,
            fullName: 'Andy Greene',
            link: '/api/v1/people/8472382',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474056,
            fullName: 'P.K. Subban',
            link: '/api/v1/people/8474056',
          },
          jerseyNumber: '76',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474190,
            fullName: 'Wayne Simmonds',
            link: '/api/v1/people/8474190',
          },
          jerseyNumber: '17',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475151,
            fullName: 'Kyle Palmieri',
            link: '/api/v1/people/8475151',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475222,
            fullName: 'Sami Vatanen',
            link: '/api/v1/people/8475222',
          },
          jerseyNumber: '45',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475791,
            fullName: 'Taylor Hall',
            link: '/api/v1/people/8475791',
          },
          jerseyNumber: '9',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476399,
            fullName: 'Blake Coleman',
            link: '/api/v1/people/8476399',
          },
          jerseyNumber: '20',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476807,
            fullName: 'Matt Tennyson',
            link: '/api/v1/people/8476807',
          },
          jerseyNumber: '7',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476923,
            fullName: 'Damon Severson',
            link: '/api/v1/people/8476923',
          },
          jerseyNumber: '28',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477038,
            fullName: 'Nikita Gusev',
            link: '/api/v1/people/8477038',
          },
          jerseyNumber: '97',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477355,
            fullName: 'Will Butcher',
            link: '/api/v1/people/8477355',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477401,
            fullName: 'John Hayden',
            link: '/api/v1/people/8477401',
          },
          jerseyNumber: '15',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477425,
            fullName: 'Miles Wood',
            link: '/api/v1/people/8477425',
          },
          jerseyNumber: '44',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477509,
            fullName: 'Mirco Mueller',
            link: '/api/v1/people/8477509',
          },
          jerseyNumber: '25',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478401,
            fullName: 'Pavel Zacha',
            link: '/api/v1/people/8478401',
          },
          jerseyNumber: '37',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478406,
            fullName: 'Mackenzie Blackwood',
            link: '/api/v1/people/8478406',
          },
          jerseyNumber: '29',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8479291,
            fullName: 'Kevin Rooney',
            link: '/api/v1/people/8479291',
          },
          jerseyNumber: '16',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479407,
            fullName: 'Jesper Bratt',
            link: '/api/v1/people/8479407',
          },
          jerseyNumber: '63',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8480002,
            fullName: 'Nico Hischier',
            link: '/api/v1/people/8480002',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480003,
            fullName: 'Jesper Boqvist',
            link: '/api/v1/people/8480003',
          },
          jerseyNumber: '90',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8481559,
            fullName: 'Jack Hughes',
            link: '/api/v1/people/8481559',
          },
          jerseyNumber: '86',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/1/roster',
    },
    shortName: 'New Jersey',
    officialSiteUrl: 'http://www.newjerseydevils.com/',
    franchiseId: 23,
    active: true,
  },
  {
    id: 2,
    name: 'New York Islanders',
    link: '/api/v1/teams/2',
    venue: {
      id: 5026,
      name: 'Barclays Center',
      link: '/api/v1/venues/5026',
      city: 'Brooklyn',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'NYI',
    teamName: 'Islanders',
    locationName: 'New York',
    firstYearOfPlay: '1972',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 22,
      teamName: 'Islanders',
      link: '/api/v1/franchises/22',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8473463,
            fullName: 'Leo Komarov',
            link: '/api/v1/people/8473463',
          },
          jerseyNumber: '47',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474586,
            fullName: 'Jordan Eberle',
            link: '/api/v1/people/8474586',
          },
          jerseyNumber: '7',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474709,
            fullName: 'Matt Martin',
            link: '/api/v1/people/8474709',
          },
          jerseyNumber: '17',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475832,
            fullName: 'Tom Kuhnhackl',
            link: '/api/v1/people/8475832',
          },
          jerseyNumber: '14',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8471217,
            fullName: 'Andrew Ladd',
            link: '/api/v1/people/8471217',
          },
          jerseyNumber: '16',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8470187,
            fullName: 'Johnny Boychuk',
            link: '/api/v1/people/8470187',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471306,
            fullName: 'Thomas Greiss',
            link: '/api/v1/people/8471306',
          },
          jerseyNumber: '1',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8473504,
            fullName: 'Cal Clutterbuck',
            link: '/api/v1/people/8473504',
          },
          jerseyNumber: '15',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8473544,
            fullName: 'Derick Brassard',
            link: '/api/v1/people/8473544',
          },
          jerseyNumber: '10',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8473575,
            fullName: 'Semyon Varlamov',
            link: '/api/v1/people/8473575',
          },
          jerseyNumber: '40',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8474573,
            fullName: 'Josh Bailey',
            link: '/api/v1/people/8474573',
          },
          jerseyNumber: '12',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475181,
            fullName: 'Nick Leddy',
            link: '/api/v1/people/8475181',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475231,
            fullName: 'Casey Cizikas',
            link: '/api/v1/people/8475231',
          },
          jerseyNumber: '53',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475314,
            fullName: 'Anders Lee',
            link: '/api/v1/people/8475314',
          },
          jerseyNumber: '27',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475754,
            fullName: 'Brock Nelson',
            link: '/api/v1/people/8475754',
          },
          jerseyNumber: '29',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476429,
            fullName: 'Scott Mayfield',
            link: '/api/v1/people/8476429',
          },
          jerseyNumber: '24',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476917,
            fullName: 'Adam Pelech',
            link: '/api/v1/people/8476917',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477506,
            fullName: 'Ryan Pulock',
            link: '/api/v1/people/8477506',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477527,
            fullName: 'Ross Johnston',
            link: '/api/v1/people/8477527',
          },
          jerseyNumber: '32',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477936,
            fullName: 'Michael Dal Colle',
            link: '/api/v1/people/8477936',
          },
          jerseyNumber: '28',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478038,
            fullName: 'Devon Toews',
            link: '/api/v1/people/8478038',
          },
          jerseyNumber: '25',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478367,
            fullName: 'Cole Bardreau',
            link: '/api/v1/people/8478367',
          },
          jerseyNumber: '34',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478445,
            fullName: 'Mathew Barzal',
            link: '/api/v1/people/8478445',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478463,
            fullName: 'Anthony Beauvillier',
            link: '/api/v1/people/8478463',
          },
          jerseyNumber: '18',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8480789,
            fullName: 'Oliver Wahlstrom',
            link: '/api/v1/people/8480789',
          },
          jerseyNumber: '26',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8480865,
            fullName: 'Noah Dobson',
            link: '/api/v1/people/8480865',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
      ],
      link: '/api/v1/teams/2/roster',
    },
    shortName: 'NY Islanders',
    officialSiteUrl: 'http://www.newyorkislanders.com/',
    franchiseId: 22,
    active: true,
  },
  {
    id: 3,
    name: 'New York Rangers',
    link: '/api/v1/teams/3',
    venue: {
      id: 5054,
      name: 'Madison Square Garden',
      link: '/api/v1/venues/5054',
      city: 'New York',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'NYR',
    teamName: 'Rangers',
    locationName: 'New York',
    firstYearOfPlay: '1926',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 10,
      teamName: 'Rangers',
      link: '/api/v1/franchises/10',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8468685,
            fullName: 'Henrik Lundqvist',
            link: '/api/v1/people/8468685',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471686,
            fullName: 'Marc Staal',
            link: '/api/v1/people/8471686',
          },
          jerseyNumber: '18',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474090,
            fullName: 'Brendan Smith',
            link: '/api/v1/people/8474090',
          },
          jerseyNumber: '42',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474230,
            fullName: 'Micheal Haley',
            link: '/api/v1/people/8474230',
          },
          jerseyNumber: '38',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475184,
            fullName: 'Chris Kreider',
            link: '/api/v1/people/8475184',
          },
          jerseyNumber: '20',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475735,
            fullName: 'Greg McKegg',
            link: '/api/v1/people/8475735',
          },
          jerseyNumber: '14',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475855,
            fullName: 'Jesper Fast',
            link: '/api/v1/people/8475855',
          },
          jerseyNumber: '17',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476458,
            fullName: 'Ryan Strome',
            link: '/api/v1/people/8476458',
          },
          jerseyNumber: '16',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476459,
            fullName: 'Mika Zibanejad',
            link: '/api/v1/people/8476459',
          },
          jerseyNumber: '93',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476869,
            fullName: 'Brady Skjei',
            link: '/api/v1/people/8476869',
          },
          jerseyNumber: '76',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476885,
            fullName: 'Jacob Trouba',
            link: '/api/v1/people/8476885',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477402,
            fullName: 'Pavel Buchnevich',
            link: '/api/v1/people/8477402',
          },
          jerseyNumber: '89',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477950,
            fullName: 'Tony DeAngelo',
            link: '/api/v1/people/8477950',
          },
          jerseyNumber: '77',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477962,
            fullName: 'Brendan Lemieux',
            link: '/api/v1/people/8477962',
          },
          jerseyNumber: '48',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478550,
            fullName: 'Artemi Panarin',
            link: '/api/v1/people/8478550',
          },
          jerseyNumber: '10',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479323,
            fullName: 'Adam Fox',
            link: '/api/v1/people/8479323',
          },
          jerseyNumber: '23',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479324,
            fullName: 'Ryan Lindgren',
            link: '/api/v1/people/8479324',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479333,
            fullName: 'Libor Hajek',
            link: '/api/v1/people/8479333',
          },
          jerseyNumber: '25',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479353,
            fullName: 'Brett Howden',
            link: '/api/v1/people/8479353',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480072,
            fullName: 'Lias Andersson',
            link: '/api/v1/people/8480072',
          },
          jerseyNumber: '28',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480078,
            fullName: 'Filip Chytil',
            link: '/api/v1/people/8480078',
          },
          jerseyNumber: '72',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480382,
            fullName: 'Alexandar Georgiev',
            link: '/api/v1/people/8480382',
          },
          jerseyNumber: '40',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8481554,
            fullName: 'Kaapo Kakko',
            link: '/api/v1/people/8481554',
          },
          jerseyNumber: '24',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
      ],
      link: '/api/v1/teams/3/roster',
    },
    shortName: 'NY Rangers',
    officialSiteUrl: 'http://www.newyorkrangers.com/',
    franchiseId: 10,
    active: true,
  },
  {
    id: 4,
    name: 'Philadelphia Flyers',
    link: '/api/v1/teams/4',
    venue: {
      id: 5096,
      name: 'Wells Fargo Center',
      link: '/api/v1/venues/5096',
      city: 'Philadelphia',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'PHI',
    teamName: 'Flyers',
    locationName: 'Philadelphia',
    firstYearOfPlay: '1967',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 16,
      teamName: 'Flyers',
      link: '/api/v1/franchises/16',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8476872,
            fullName: 'Scott Laughton',
            link: '/api/v1/people/8476872',
          },
          jerseyNumber: '21',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8470880,
            fullName: 'Brian Elliott',
            link: '/api/v1/people/8470880',
          },
          jerseyNumber: '37',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471702,
            fullName: 'Matt Niskanen',
            link: '/api/v1/people/8471702',
          },
          jerseyNumber: '15',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8473485,
            fullName: 'Chris Stewart',
            link: '/api/v1/people/8473485',
          },
          jerseyNumber: '44',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8473512,
            fullName: 'Claude Giroux',
            link: '/api/v1/people/8473512',
          },
          jerseyNumber: '28',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8474027,
            fullName: 'Justin Braun',
            link: '/api/v1/people/8474027',
          },
          jerseyNumber: '61',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474037,
            fullName: 'James van Riemsdyk',
            link: '/api/v1/people/8474037',
          },
          jerseyNumber: '25',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474161,
            fullName: 'Jakub Voracek',
            link: '/api/v1/people/8474161',
          },
          jerseyNumber: '93',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475752,
            fullName: 'Tyler Pitlick',
            link: '/api/v1/people/8475752',
          },
          jerseyNumber: '18',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475763,
            fullName: 'Kevin Hayes',
            link: '/api/v1/people/8475763',
          },
          jerseyNumber: '13',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476461,
            fullName: 'Sean Couturier',
            link: '/api/v1/people/8476461',
          },
          jerseyNumber: '14',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476906,
            fullName: 'Shayne Gostisbehere',
            link: '/api/v1/people/8476906',
          },
          jerseyNumber: '53',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477290,
            fullName: 'Michael Raffl',
            link: '/api/v1/people/8477290',
          },
          jerseyNumber: '12',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477462,
            fullName: 'Robert Hagg',
            link: '/api/v1/people/8477462',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477502,
            fullName: 'Samuel Morin',
            link: '/api/v1/people/8477502',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477948,
            fullName: 'Travis Sanheim',
            link: '/api/v1/people/8477948',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478067,
            fullName: 'Oskar Lindblom',
            link: '/api/v1/people/8478067',
          },
          jerseyNumber: '23',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478439,
            fullName: 'Travis Konecny',
            link: '/api/v1/people/8478439',
          },
          jerseyNumber: '11',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478500,
            fullName: 'Ivan Provorov',
            link: '/api/v1/people/8478500',
          },
          jerseyNumber: '9',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478844,
            fullName: 'Mikhail Vorobyev',
            link: '/api/v1/people/8478844',
          },
          jerseyNumber: '24',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479026,
            fullName: 'Philippe Myers',
            link: '/api/v1/people/8479026',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479358,
            fullName: 'Carsen Twarynski',
            link: '/api/v1/people/8479358',
          },
          jerseyNumber: '81',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479394,
            fullName: 'Carter Hart',
            link: '/api/v1/people/8479394',
          },
          jerseyNumber: '79',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8480797,
            fullName: 'Joel Farabee',
            link: '/api/v1/people/8480797',
          },
          jerseyNumber: '49',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
      ],
      link: '/api/v1/teams/4/roster',
    },
    shortName: 'Philadelphia',
    officialSiteUrl: 'http://www.philadelphiaflyers.com/',
    franchiseId: 16,
    active: true,
  },
  {
    id: 5,
    name: 'Pittsburgh Penguins',
    link: '/api/v1/teams/5',
    venue: {
      id: 5034,
      name: 'PPG Paints Arena',
      link: '/api/v1/venues/5034',
      city: 'Pittsburgh',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'PIT',
    teamName: 'Penguins',
    locationName: 'Pittsburgh',
    firstYearOfPlay: '1967',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 17,
      teamName: 'Penguins',
      link: '/api/v1/franchises/17',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8471887,
            fullName: 'Patric Hornqvist',
            link: '/api/v1/people/8471887',
          },
          jerseyNumber: '72',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8471215,
            fullName: 'Evgeni Malkin',
            link: '/api/v1/people/8471215',
          },
          jerseyNumber: '71',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471675,
            fullName: 'Sidney Crosby',
            link: '/api/v1/people/8471675',
          },
          jerseyNumber: '87',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471677,
            fullName: 'Jack Johnson',
            link: '/api/v1/people/8471677',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471724,
            fullName: 'Kris Letang',
            link: '/api/v1/people/8471724',
          },
          jerseyNumber: '58',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474602,
            fullName: 'Justin Schultz',
            link: '/api/v1/people/8474602',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475208,
            fullName: 'Brian Dumoulin',
            link: '/api/v1/people/8475208',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475760,
            fullName: 'Nick Bjugstad',
            link: '/api/v1/people/8475760',
          },
          jerseyNumber: '27',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475810,
            fullName: 'Bryan Rust',
            link: '/api/v1/people/8475810',
          },
          jerseyNumber: '17',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476851,
            fullName: 'Alex Galchenyuk',
            link: '/api/v1/people/8476851',
          },
          jerseyNumber: '18',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476899,
            fullName: 'Matt Murray',
            link: '/api/v1/people/8476899',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476927,
            fullName: 'Teddy Blueger',
            link: '/api/v1/people/8476927',
          },
          jerseyNumber: '53',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477244,
            fullName: 'Chad Ruhwedel',
            link: '/api/v1/people/8477244',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477404,
            fullName: 'Jake Guentzel',
            link: '/api/v1/people/8477404',
          },
          jerseyNumber: '59',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477465,
            fullName: 'Tristan Jarry',
            link: '/api/v1/people/8477465',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477955,
            fullName: 'Jared McCann',
            link: '/api/v1/people/8477955',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477969,
            fullName: 'Marcus Pettersson',
            link: '/api/v1/people/8477969',
          },
          jerseyNumber: '28',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478043,
            fullName: 'Sam Lafferty',
            link: '/api/v1/people/8478043',
          },
          jerseyNumber: '37',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478507,
            fullName: 'John Marino',
            link: '/api/v1/people/8478507',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478866,
            fullName: 'Dominik Simon',
            link: '/api/v1/people/8478866',
          },
          jerseyNumber: '12',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479293,
            fullName: 'Brandon Tanev',
            link: '/api/v1/people/8479293',
          },
          jerseyNumber: '13',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479944,
            fullName: 'Zach Aston-Reese',
            link: '/api/v1/people/8479944',
          },
          jerseyNumber: '46',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480945,
            fullName: 'Juuso Riikola',
            link: '/api/v1/people/8480945',
          },
          jerseyNumber: '50',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480946,
            fullName: 'Dominik Kahun',
            link: '/api/v1/people/8480946',
          },
          jerseyNumber: '24',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/5/roster',
    },
    shortName: 'Pittsburgh',
    officialSiteUrl: 'http://pittsburghpenguins.com/',
    franchiseId: 17,
    active: true,
  },
  {
    id: 6,
    name: 'Boston Bruins',
    link: '/api/v1/teams/6',
    venue: {
      id: 5085,
      name: 'TD Garden',
      link: '/api/v1/venues/5085',
      city: 'Boston',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'BOS',
    teamName: 'Bruins',
    locationName: 'Boston',
    firstYearOfPlay: '1924',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 6,
      teamName: 'Bruins',
      link: '/api/v1/franchises/6',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8475807,
            fullName: 'Joakim Nordstrom',
            link: '/api/v1/people/8475807',
          },
          jerseyNumber: '20',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480901,
            fullName: 'Karson Kuhlman',
            link: '/api/v1/people/8480901',
          },
          jerseyNumber: '83',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480944,
            fullName: 'Par Lindholm',
            link: '/api/v1/people/8480944',
          },
          jerseyNumber: '26',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475186,
            fullName: 'John Moore',
            link: '/api/v1/people/8475186',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476191,
            fullName: 'Kevan Miller',
            link: '/api/v1/people/8476191',
          },
          jerseyNumber: '86',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8465009,
            fullName: 'Zdeno Chara',
            link: '/api/v1/people/8465009',
          },
          jerseyNumber: '33',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470638,
            fullName: 'Patrice Bergeron',
            link: '/api/v1/people/8470638',
          },
          jerseyNumber: '37',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470655,
            fullName: 'David Backes',
            link: '/api/v1/people/8470655',
          },
          jerseyNumber: '42',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8470860,
            fullName: 'Jaroslav Halak',
            link: '/api/v1/people/8470860',
          },
          jerseyNumber: '41',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471276,
            fullName: 'David Krejci',
            link: '/api/v1/people/8471276',
          },
          jerseyNumber: '46',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471695,
            fullName: 'Tuukka Rask',
            link: '/api/v1/people/8471695',
          },
          jerseyNumber: '40',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8473419,
            fullName: 'Brad Marchand',
            link: '/api/v1/people/8473419',
          },
          jerseyNumber: '63',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474000,
            fullName: 'Steven Kampfer',
            link: '/api/v1/people/8474000',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475745,
            fullName: 'Charlie Coyle',
            link: '/api/v1/people/8475745',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475780,
            fullName: 'Chris Wagner',
            link: '/api/v1/people/8475780',
          },
          jerseyNumber: '14',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476374,
            fullName: 'Sean Kuraly',
            link: '/api/v1/people/8476374',
          },
          jerseyNumber: '52',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476439,
            fullName: 'Brett Ritchie',
            link: '/api/v1/people/8476439',
          },
          jerseyNumber: '18',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476792,
            fullName: 'Torey Krug',
            link: '/api/v1/people/8476792',
          },
          jerseyNumber: '47',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476891,
            fullName: 'Matt Grzelcyk',
            link: '/api/v1/people/8476891',
          },
          jerseyNumber: '48',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477365,
            fullName: 'Connor Clifton',
            link: '/api/v1/people/8477365',
          },
          jerseyNumber: '75',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477956,
            fullName: 'David Pastrnak',
            link: '/api/v1/people/8477956',
          },
          jerseyNumber: '88',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478046,
            fullName: 'Danton Heinen',
            link: '/api/v1/people/8478046',
          },
          jerseyNumber: '43',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478075,
            fullName: 'Anders Bjork',
            link: '/api/v1/people/8478075',
          },
          jerseyNumber: '10',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478443,
            fullName: 'Brandon Carlo',
            link: '/api/v1/people/8478443',
          },
          jerseyNumber: '25',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478498,
            fullName: 'Jake DeBrusk',
            link: '/api/v1/people/8478498',
          },
          jerseyNumber: '74',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479325,
            fullName: 'Charlie McAvoy',
            link: '/api/v1/people/8479325',
          },
          jerseyNumber: '73',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
      ],
      link: '/api/v1/teams/6/roster',
    },
    shortName: 'Boston',
    officialSiteUrl: 'http://www.bostonbruins.com/',
    franchiseId: 6,
    active: true,
  },
  {
    id: 7,
    name: 'Buffalo Sabres',
    link: '/api/v1/teams/7',
    venue: {
      id: 5039,
      name: 'KeyBank Center',
      link: '/api/v1/venues/5039',
      city: 'Buffalo',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'BUF',
    teamName: 'Sabres',
    locationName: 'Buffalo',
    firstYearOfPlay: '1970',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 19,
      teamName: 'Sabres',
      link: '/api/v1/franchises/19',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8474618,
            fullName: 'Marco Scandella',
            link: '/api/v1/people/8474618',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471436,
            fullName: 'Matt Hunwick',
            link: '/api/v1/people/8471436',
          },
          jerseyNumber: '48',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474567,
            fullName: 'Zach Bogosian',
            link: '/api/v1/people/8474567',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477202,
            fullName: 'Andrew Hammond',
            link: '/api/v1/people/8477202',
          },
          jerseyNumber: '36',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471743,
            fullName: 'Vladimir Sobotka',
            link: '/api/v1/people/8471743',
          },
          jerseyNumber: '17',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8473449,
            fullName: 'Kyle Okposo',
            link: '/api/v1/people/8473449',
          },
          jerseyNumber: '21',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475149,
            fullName: 'Marcus Johansson',
            link: '/api/v1/people/8475149',
          },
          jerseyNumber: '90',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475622,
            fullName: 'Carter Hutton',
            link: '/api/v1/people/8475622',
          },
          jerseyNumber: '40',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475728,
            fullName: 'Johan Larsson',
            link: '/api/v1/people/8475728',
          },
          jerseyNumber: '22',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475784,
            fullName: 'Jeff Skinner',
            link: '/api/v1/people/8475784',
          },
          jerseyNumber: '53',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476525,
            fullName: 'Colin Miller',
            link: '/api/v1/people/8476525',
          },
          jerseyNumber: '33',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476878,
            fullName: 'Zemgus Girgensons',
            link: '/api/v1/people/8476878',
          },
          jerseyNumber: '28',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476918,
            fullName: 'Jimmy Vesey',
            link: '/api/v1/people/8476918',
          },
          jerseyNumber: '13',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476931,
            fullName: 'Jake McCabe',
            link: '/api/v1/people/8476931',
          },
          jerseyNumber: '19',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476999,
            fullName: 'Linus Ullmark',
            link: '/api/v1/people/8476999',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477337,
            fullName: 'John Gilmour',
            link: '/api/v1/people/8477337',
          },
          jerseyNumber: '58',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477499,
            fullName: 'Rasmus Ristolainen',
            link: '/api/v1/people/8477499',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477839,
            fullName: 'Conor Sheary',
            link: '/api/v1/people/8477839',
          },
          jerseyNumber: '43',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477933,
            fullName: 'Sam Reinhart',
            link: '/api/v1/people/8477933',
          },
          jerseyNumber: '23',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477986,
            fullName: 'Brandon Montour',
            link: '/api/v1/people/8477986',
          },
          jerseyNumber: '62',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478109,
            fullName: 'Victor Olofsson',
            link: '/api/v1/people/8478109',
          },
          jerseyNumber: '68',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478403,
            fullName: 'Jack Eichel',
            link: '/api/v1/people/8478403',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478542,
            fullName: 'Evan Rodrigues',
            link: '/api/v1/people/8478542',
          },
          jerseyNumber: '71',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479999,
            fullName: 'Casey Mittelstadt',
            link: '/api/v1/people/8479999',
          },
          jerseyNumber: '37',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480035,
            fullName: 'Henri Jokiharju',
            link: '/api/v1/people/8480035',
          },
          jerseyNumber: '10',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480839,
            fullName: 'Rasmus Dahlin',
            link: '/api/v1/people/8480839',
          },
          jerseyNumber: '26',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480935,
            fullName: 'Lawrence Pilut',
            link: '/api/v1/people/8480935',
          },
          jerseyNumber: '24',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
      ],
      link: '/api/v1/teams/7/roster',
    },
    shortName: 'Buffalo',
    officialSiteUrl: 'http://www.sabres.com/',
    franchiseId: 19,
    active: true,
  },
  {
    id: 8,
    name: 'Montréal Canadiens',
    link: '/api/v1/teams/8',
    venue: {
      id: 5028,
      name: 'Bell Centre',
      link: '/api/v1/venues/5028',
      city: 'Montréal',
      timeZone: {
        id: 'America/Montreal',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'MTL',
    teamName: 'Canadiens',
    locationName: 'Montréal',
    firstYearOfPlay: '1909',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 1,
      teamName: 'Canadiens',
      link: '/api/v1/franchises/1',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8480829,
            fullName: 'Jesperi Kotkaniemi',
            link: '/api/v1/people/8480829',
          },
          jerseyNumber: '15',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470642,
            fullName: 'Shea Weber',
            link: '/api/v1/people/8470642',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470775,
            fullName: 'Nate Thompson',
            link: '/api/v1/people/8470775',
          },
          jerseyNumber: '44',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471679,
            fullName: 'Carey Price',
            link: '/api/v1/people/8471679',
          },
          jerseyNumber: '31',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8473507,
            fullName: 'Jeff Petry',
            link: '/api/v1/people/8473507',
          },
          jerseyNumber: '26',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474038,
            fullName: 'Paul Byron',
            link: '/api/v1/people/8474038',
          },
          jerseyNumber: '41',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475193,
            fullName: 'Tomas Tatar',
            link: '/api/v1/people/8475193',
          },
          jerseyNumber: '90',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475279,
            fullName: 'Ben Chiarot',
            link: '/api/v1/people/8475279',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475738,
            fullName: 'Jordan Weal',
            link: '/api/v1/people/8475738',
          },
          jerseyNumber: '43',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475848,
            fullName: 'Brendan Gallagher',
            link: '/api/v1/people/8475848',
          },
          jerseyNumber: '11',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476234,
            fullName: 'Keith Kinkaid',
            link: '/api/v1/people/8476234',
          },
          jerseyNumber: '37',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476393,
            fullName: 'Nick Cousins',
            link: '/api/v1/people/8476393',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476422,
            fullName: 'Mike Reilly',
            link: '/api/v1/people/8476422',
          },
          jerseyNumber: '28',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476469,
            fullName: 'Joel Armia',
            link: '/api/v1/people/8476469',
          },
          jerseyNumber: '40',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476479,
            fullName: 'Phillip Danault',
            link: '/api/v1/people/8476479',
          },
          jerseyNumber: '24',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476967,
            fullName: 'Brett Kulak',
            link: '/api/v1/people/8476967',
          },
          jerseyNumber: '17',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477476,
            fullName: 'Artturi Lehkonen',
            link: '/api/v1/people/8477476',
          },
          jerseyNumber: '62',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477494,
            fullName: 'Jonathan Drouin',
            link: '/api/v1/people/8477494',
          },
          jerseyNumber: '92',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477503,
            fullName: 'Max Domi',
            link: '/api/v1/people/8477503',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477850,
            fullName: 'Christian Folin',
            link: '/api/v1/people/8477850',
          },
          jerseyNumber: '32',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479376,
            fullName: 'Victor Mete',
            link: '/api/v1/people/8479376',
          },
          jerseyNumber: '53',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479985,
            fullName: 'Cale Fleury',
            link: '/api/v1/people/8479985',
          },
          jerseyNumber: '20',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480018,
            fullName: 'Nick Suzuki',
            link: '/api/v1/people/8480018',
          },
          jerseyNumber: '14',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480068,
            fullName: 'Ryan Poehling',
            link: '/api/v1/people/8480068',
          },
          jerseyNumber: '25',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/8/roster',
    },
    shortName: 'Montréal',
    officialSiteUrl: 'http://www.canadiens.com/',
    franchiseId: 1,
    active: true,
  },
  {
    id: 9,
    name: 'Ottawa Senators',
    link: '/api/v1/teams/9',
    venue: {
      id: 5031,
      name: 'Canadian Tire Centre',
      link: '/api/v1/venues/5031',
      city: 'Ottawa',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'OTT',
    teamName: 'Senators',
    locationName: 'Ottawa',
    firstYearOfPlay: '1990',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 30,
      teamName: 'Senators',
      link: '/api/v1/franchises/30',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8477149,
            fullName: 'Scott Sabourin',
            link: '/api/v1/people/8477149',
          },
          jerseyNumber: '49',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478870,
            fullName: 'Rudolfs Balcers',
            link: '/api/v1/people/8478870',
          },
          jerseyNumber: '38',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479366,
            fullName: 'Logan Brown',
            link: '/api/v1/people/8479366',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8467950,
            fullName: 'Craig Anderson',
            link: '/api/v1/people/8467950',
          },
          jerseyNumber: '41',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8468493,
            fullName: 'Ron Hainsey',
            link: '/api/v1/people/8468493',
          },
          jerseyNumber: '81',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471676,
            fullName: 'Bobby Ryan',
            link: '/api/v1/people/8471676',
          },
          jerseyNumber: '9',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8473573,
            fullName: 'Artem Anisimov',
            link: '/api/v1/people/8473573',
          },
          jerseyNumber: '51',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474571,
            fullName: 'Mikkel Boedker',
            link: '/api/v1/people/8474571',
          },
          jerseyNumber: '89',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474589,
            fullName: 'Tyler Ennis',
            link: '/api/v1/people/8474589',
          },
          jerseyNumber: '63',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474597,
            fullName: 'Cody Goloubef',
            link: '/api/v1/people/8474597',
          },
          jerseyNumber: '29',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474697,
            fullName: 'Mark Borowiecki',
            link: '/api/v1/people/8474697',
          },
          jerseyNumber: '74',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475195,
            fullName: 'Anders Nilsson',
            link: '/api/v1/people/8475195',
          },
          jerseyNumber: '31',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476331,
            fullName: 'Dylan DeMelo',
            link: '/api/v1/people/8476331',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476419,
            fullName: 'Jean-Gabriel Pageau',
            link: '/api/v1/people/8476419',
          },
          jerseyNumber: '44',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476480,
            fullName: 'Vladislav Namestnikov',
            link: '/api/v1/people/8476480',
          },
          jerseyNumber: '90',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476919,
            fullName: 'Chris Tierney',
            link: '/api/v1/people/8476919',
          },
          jerseyNumber: '71',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477015,
            fullName: 'Connor Brown',
            link: '/api/v1/people/8477015',
          },
          jerseyNumber: '28',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477407,
            fullName: 'Anthony Duclair',
            link: '/api/v1/people/8477407',
          },
          jerseyNumber: '10',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477426,
            fullName: 'Nick Paul',
            link: '/api/v1/people/8477426',
          },
          jerseyNumber: '13',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478400,
            fullName: 'Colin White',
            link: '/api/v1/people/8478400',
          },
          jerseyNumber: '36',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478469,
            fullName: 'Thomas Chabot',
            link: '/api/v1/people/8478469',
          },
          jerseyNumber: '72',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478488,
            fullName: 'Filip Chlapik',
            link: '/api/v1/people/8478488',
          },
          jerseyNumber: '78',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478833,
            fullName: 'J.C. Beaudin',
            link: '/api/v1/people/8478833',
          },
          jerseyNumber: '64',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479458,
            fullName: 'Nikita Zaitsev',
            link: '/api/v1/people/8479458',
          },
          jerseyNumber: '22',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480073,
            fullName: 'Erik Brannstrom',
            link: '/api/v1/people/8480073',
          },
          jerseyNumber: '26',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480801,
            fullName: 'Brady Tkachuk',
            link: '/api/v1/people/8480801',
          },
          jerseyNumber: '7',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
      ],
      link: '/api/v1/teams/9/roster',
    },
    shortName: 'Ottawa',
    officialSiteUrl: 'http://www.ottawasenators.com/',
    franchiseId: 30,
    active: true,
  },
  {
    id: 10,
    name: 'Toronto Maple Leafs',
    link: '/api/v1/teams/10',
    venue: {
      name: 'Scotiabank Arena',
      link: '/api/v1/venues/null',
      city: 'Toronto',
      timeZone: {
        id: 'America/Toronto',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'TOR',
    teamName: 'Maple Leafs',
    locationName: 'Toronto',
    firstYearOfPlay: '1917',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 5,
      teamName: 'Maple Leafs',
      link: '/api/v1/franchises/5',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8469455,
            fullName: 'Jason Spezza',
            link: '/api/v1/people/8469455',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474162,
            fullName: 'Jake Muzzin',
            link: '/api/v1/people/8474162',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474636,
            fullName: 'Michael Hutchinson',
            link: '/api/v1/people/8474636',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475166,
            fullName: 'John Tavares',
            link: '/api/v1/people/8475166',
          },
          jerseyNumber: '91',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475197,
            fullName: 'Tyson Barrie',
            link: '/api/v1/people/8475197',
          },
          jerseyNumber: '94',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475716,
            fullName: 'Martin Marincin',
            link: '/api/v1/people/8475716',
          },
          jerseyNumber: '52',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475718,
            fullName: 'Justin Holl',
            link: '/api/v1/people/8475718',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475883,
            fullName: 'Frederik Andersen',
            link: '/api/v1/people/8475883',
          },
          jerseyNumber: '31',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476406,
            fullName: 'Nicholas Shore',
            link: '/api/v1/people/8476406',
          },
          jerseyNumber: '26',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476853,
            fullName: 'Morgan Rielly',
            link: '/api/v1/people/8476853',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476879,
            fullName: 'Cody Ceci',
            link: '/api/v1/people/8476879',
          },
          jerseyNumber: '83',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477021,
            fullName: 'Alexander Kerfoot',
            link: '/api/v1/people/8477021',
          },
          jerseyNumber: '15',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477341,
            fullName: 'Andreas Johnsson',
            link: '/api/v1/people/8477341',
          },
          jerseyNumber: '18',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477464,
            fullName: 'Nic Petan',
            link: '/api/v1/people/8477464',
          },
          jerseyNumber: '61',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477512,
            fullName: 'Frederik Gauthier',
            link: '/api/v1/people/8477512',
          },
          jerseyNumber: '33',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477939,
            fullName: 'William Nylander',
            link: '/api/v1/people/8477939',
          },
          jerseyNumber: '88',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477953,
            fullName: 'Kasperi Kapanen',
            link: '/api/v1/people/8477953',
          },
          jerseyNumber: '24',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478408,
            fullName: 'Travis Dermott',
            link: '/api/v1/people/8478408',
          },
          jerseyNumber: '23',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478483,
            fullName: 'Mitchell Marner',
            link: '/api/v1/people/8478483',
          },
          jerseyNumber: '16',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478857,
            fullName: 'Dmytro Timashov',
            link: '/api/v1/people/8478857',
          },
          jerseyNumber: '41',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479318,
            fullName: 'Auston Matthews',
            link: '/api/v1/people/8479318',
          },
          jerseyNumber: '34',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479675,
            fullName: 'Trevor Moore',
            link: '/api/v1/people/8479675',
          },
          jerseyNumber: '42',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8481624,
            fullName: 'Ilya Mikheyev',
            link: '/api/v1/people/8481624',
          },
          jerseyNumber: '65',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
      ],
      link: '/api/v1/teams/10/roster',
    },
    shortName: 'Toronto',
    officialSiteUrl: 'http://www.mapleleafs.com/',
    franchiseId: 5,
    active: true,
  },
  {
    id: 12,
    name: 'Carolina Hurricanes',
    link: '/api/v1/teams/12',
    venue: {
      id: 5066,
      name: 'PNC Arena',
      link: '/api/v1/venues/5066',
      city: 'Raleigh',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'CAR',
    teamName: 'Hurricanes',
    locationName: 'Carolina',
    firstYearOfPlay: '1979',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 26,
      teamName: 'Hurricanes',
      link: '/api/v1/franchises/26',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8476921,
            fullName: 'Jordan Martinook',
            link: '/api/v1/people/8476921',
          },
          jerseyNumber: '48',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8473503,
            fullName: 'James Reimer',
            link: '/api/v1/people/8473503',
          },
          jerseyNumber: '47',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8473533,
            fullName: 'Jordan Staal',
            link: '/api/v1/people/8473533',
          },
          jerseyNumber: '11',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474581,
            fullName: 'Jake Gardiner',
            link: '/api/v1/people/8474581',
          },
          jerseyNumber: '51',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475287,
            fullName: 'Erik Haula',
            link: '/api/v1/people/8475287',
          },
          jerseyNumber: '56',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475799,
            fullName: 'Nino Niederreiter',
            link: '/api/v1/people/8475799',
          },
          jerseyNumber: '21',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475852,
            fullName: 'Petr Mrazek',
            link: '/api/v1/people/8475852',
          },
          jerseyNumber: '34',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476207,
            fullName: 'Brian Gibbons',
            link: '/api/v1/people/8476207',
          },
          jerseyNumber: '29',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476288,
            fullName: 'Ryan Dzingel',
            link: '/api/v1/people/8476288',
          },
          jerseyNumber: '18',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476441,
            fullName: 'Joel Edmundson',
            link: '/api/v1/people/8476441',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476462,
            fullName: 'Dougie Hamilton',
            link: '/api/v1/people/8476462',
          },
          jerseyNumber: '19',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476882,
            fullName: 'Teuvo Teravainen',
            link: '/api/v1/people/8476882',
          },
          jerseyNumber: '86',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476934,
            fullName: 'Brock McGinn',
            link: '/api/v1/people/8476934',
          },
          jerseyNumber: '23',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476958,
            fullName: 'Jaccob Slavin',
            link: '/api/v1/people/8476958',
          },
          jerseyNumber: '74',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477488,
            fullName: 'Brett Pesce',
            link: '/api/v1/people/8477488',
          },
          jerseyNumber: '22',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477845,
            fullName: 'Trevor van Riemsdyk',
            link: '/api/v1/people/8477845',
          },
          jerseyNumber: '57',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477938,
            fullName: 'Haydn Fleury',
            link: '/api/v1/people/8477938',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477998,
            fullName: 'Warren Foegele',
            link: '/api/v1/people/8477998',
          },
          jerseyNumber: '13',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478027,
            fullName: 'Lucas Wallmark',
            link: '/api/v1/people/8478027',
          },
          jerseyNumber: '71',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478427,
            fullName: 'Sebastian Aho',
            link: '/api/v1/people/8478427',
          },
          jerseyNumber: '20',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8480039,
            fullName: 'Martin Necas',
            link: '/api/v1/people/8480039',
          },
          jerseyNumber: '88',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480830,
            fullName: 'Andrei Svechnikov',
            link: '/api/v1/people/8480830',
          },
          jerseyNumber: '37',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
      ],
      link: '/api/v1/teams/12/roster',
    },
    shortName: 'Carolina',
    officialSiteUrl: 'http://www.carolinahurricanes.com/',
    franchiseId: 26,
    active: true,
  },
  {
    id: 13,
    name: 'Florida Panthers',
    link: '/api/v1/teams/13',
    venue: {
      id: 5027,
      name: 'BB&T Center',
      link: '/api/v1/venues/5027',
      city: 'Sunrise',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'FLA',
    teamName: 'Panthers',
    locationName: 'Florida',
    firstYearOfPlay: '1993',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 33,
      teamName: 'Panthers',
      link: '/api/v1/franchises/33',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8470619,
            fullName: 'Brian Boyle',
            link: '/api/v1/people/8470619',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471735,
            fullName: 'Keith Yandle',
            link: '/api/v1/people/8471735',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471873,
            fullName: 'Anton Stralman',
            link: '/api/v1/people/8471873',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474098,
            fullName: 'Colton Sceviour',
            link: '/api/v1/people/8474098',
          },
          jerseyNumber: '7',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474149,
            fullName: 'Evgenii Dadonov',
            link: '/api/v1/people/8474149',
          },
          jerseyNumber: '63',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8474884,
            fullName: 'Mike Hoffman',
            link: '/api/v1/people/8474884',
          },
          jerseyNumber: '68',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475683,
            fullName: 'Sergei Bobrovsky',
            link: '/api/v1/people/8475683',
          },
          jerseyNumber: '72',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475792,
            fullName: 'Brett Connolly',
            link: '/api/v1/people/8475792',
          },
          jerseyNumber: '10',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475796,
            fullName: 'Mark Pysyk',
            link: '/api/v1/people/8475796',
          },
          jerseyNumber: '13',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476389,
            fullName: 'Vincent Trocheck',
            link: '/api/v1/people/8476389',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476456,
            fullName: 'Jonathan Huberdeau',
            link: '/api/v1/people/8476456',
          },
          jerseyNumber: '11',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476875,
            fullName: 'Mike Matheson',
            link: '/api/v1/people/8476875',
          },
          jerseyNumber: '19',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476952,
            fullName: 'Dominic Toninato',
            link: '/api/v1/people/8476952',
          },
          jerseyNumber: '14',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477346,
            fullName: 'MacKenzie Weegar',
            link: '/api/v1/people/8477346',
          },
          jerseyNumber: '52',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477384,
            fullName: 'Josh Brown',
            link: '/api/v1/people/8477384',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477493,
            fullName: 'Aleksander Barkov',
            link: '/api/v1/people/8477493',
          },
          jerseyNumber: '16',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477932,
            fullName: 'Aaron Ekblad',
            link: '/api/v1/people/8477932',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477963,
            fullName: 'Jayce Hawryluk',
            link: '/api/v1/people/8477963',
          },
          jerseyNumber: '8',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478211,
            fullName: 'Dryden Hunt',
            link: '/api/v1/people/8478211',
          },
          jerseyNumber: '73',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478366,
            fullName: 'Frank Vatrano',
            link: '/api/v1/people/8478366',
          },
          jerseyNumber: '77',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478470,
            fullName: 'Sam Montembeault',
            link: '/api/v1/people/8478470',
          },
          jerseyNumber: '33',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8478569,
            fullName: 'Noel Acciari',
            link: '/api/v1/people/8478569',
          },
          jerseyNumber: '55',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478843,
            fullName: 'Denis Malgin',
            link: '/api/v1/people/8478843',
          },
          jerseyNumber: '62',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/13/roster',
    },
    shortName: 'Florida',
    officialSiteUrl: 'http://www.floridapanthers.com/',
    franchiseId: 33,
    active: true,
  },
  {
    id: 14,
    name: 'Tampa Bay Lightning',
    link: '/api/v1/teams/14',
    venue: {
      name: 'AMALIE Arena',
      link: '/api/v1/venues/null',
      city: 'Tampa',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'TBL',
    teamName: 'Lightning',
    locationName: 'Tampa Bay',
    firstYearOfPlay: '1991',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 31,
      teamName: 'Lightning',
      link: '/api/v1/franchises/31',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8474034,
            fullName: 'Pat Maroon',
            link: '/api/v1/people/8474034',
          },
          jerseyNumber: '14',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475167,
            fullName: 'Victor Hedman',
            link: '/api/v1/people/8475167',
          },
          jerseyNumber: '77',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470147,
            fullName: 'Curtis McElhinney',
            link: '/api/v1/people/8470147',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8470601,
            fullName: 'Braydon Coburn',
            link: '/api/v1/people/8470601',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8473986,
            fullName: 'Alex Killorn',
            link: '/api/v1/people/8473986',
          },
          jerseyNumber: '17',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474031,
            fullName: 'Kevin Shattenkirk',
            link: '/api/v1/people/8474031',
          },
          jerseyNumber: '22',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474151,
            fullName: 'Ryan McDonagh',
            link: '/api/v1/people/8474151',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474564,
            fullName: 'Steven Stamkos',
            link: '/api/v1/people/8474564',
          },
          jerseyNumber: '91',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474568,
            fullName: 'Luke Schenn',
            link: '/api/v1/people/8474568',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474870,
            fullName: 'Tyler Johnson',
            link: '/api/v1/people/8474870',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476292,
            fullName: 'Ondrej Palat',
            link: '/api/v1/people/8476292',
          },
          jerseyNumber: '18',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476453,
            fullName: 'Nikita Kucherov',
            link: '/api/v1/people/8476453',
          },
          jerseyNumber: '86',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476826,
            fullName: 'Yanni Gourde',
            link: '/api/v1/people/8476826',
          },
          jerseyNumber: '37',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476883,
            fullName: 'Andrei Vasilevskiy',
            link: '/api/v1/people/8476883',
          },
          jerseyNumber: '88',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476975,
            fullName: 'Cedric Paquette',
            link: '/api/v1/people/8476975',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477409,
            fullName: 'Carter Verhaeghe',
            link: '/api/v1/people/8477409',
          },
          jerseyNumber: '23',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478010,
            fullName: 'Brayden Point',
            link: '/api/v1/people/8478010',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478416,
            fullName: 'Erik Cernak',
            link: '/api/v1/people/8478416',
          },
          jerseyNumber: '81',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478472,
            fullName: 'Mathieu Joseph',
            link: '/api/v1/people/8478472',
          },
          jerseyNumber: '7',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478519,
            fullName: 'Anthony Cirelli',
            link: '/api/v1/people/8478519',
          },
          jerseyNumber: '71',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479410,
            fullName: 'Mikhail Sergachev',
            link: '/api/v1/people/8479410',
          },
          jerseyNumber: '98',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480172,
            fullName: 'Jan Rutta',
            link: '/api/v1/people/8480172',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480186,
            fullName: 'Alexander Volkov',
            link: '/api/v1/people/8480186',
          },
          jerseyNumber: '92',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
      ],
      link: '/api/v1/teams/14/roster',
    },
    shortName: 'Tampa Bay',
    officialSiteUrl: 'http://www.tampabaylightning.com/',
    franchiseId: 31,
    active: true,
  },
  {
    id: 15,
    name: 'Washington Capitals',
    link: '/api/v1/teams/15',
    venue: {
      id: 5094,
      name: 'Capital One Arena',
      link: '/api/v1/venues/5094',
      city: 'Washington',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'WSH',
    teamName: 'Capitals',
    locationName: 'Washington',
    firstYearOfPlay: '1974',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 24,
      teamName: 'Capitals',
      link: '/api/v1/franchises/24',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8475209,
            fullName: 'Richard Panik',
            link: '/api/v1/people/8475209',
          },
          jerseyNumber: '14',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477070,
            fullName: "Liam O'Brien",
            link: '/api/v1/people/8477070',
          },
          jerseyNumber: '87',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471214,
            fullName: 'Alex Ovechkin',
            link: '/api/v1/people/8471214',
          },
          jerseyNumber: '8',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8471698,
            fullName: 'T.J. Oshie',
            link: '/api/v1/people/8471698',
          },
          jerseyNumber: '77',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8473563,
            fullName: 'Nicklas Backstrom',
            link: '/api/v1/people/8473563',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474176,
            fullName: 'Carl Hagelin',
            link: '/api/v1/people/8474176',
          },
          jerseyNumber: '62',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474189,
            fullName: 'Lars Eller',
            link: '/api/v1/people/8474189',
          },
          jerseyNumber: '20',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474590,
            fullName: 'John Carlson',
            link: '/api/v1/people/8474590',
          },
          jerseyNumber: '74',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474651,
            fullName: 'Braden Holtby',
            link: '/api/v1/people/8474651',
          },
          jerseyNumber: '70',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475200,
            fullName: 'Dmitry Orlov',
            link: '/api/v1/people/8475200',
          },
          jerseyNumber: '9',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475324,
            fullName: 'Nick Jensen',
            link: '/api/v1/people/8475324',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475343,
            fullName: 'Nic Dowd',
            link: '/api/v1/people/8475343',
          },
          jerseyNumber: '26',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475462,
            fullName: 'Radko Gudas',
            link: '/api/v1/people/8475462',
          },
          jerseyNumber: '33',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475744,
            fullName: 'Evgeny Kuznetsov',
            link: '/api/v1/people/8475744',
          },
          jerseyNumber: '92',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476329,
            fullName: 'Travis Boyd',
            link: '/api/v1/people/8476329',
          },
          jerseyNumber: '72',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476880,
            fullName: 'Tom Wilson',
            link: '/api/v1/people/8476880',
          },
          jerseyNumber: '43',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476894,
            fullName: 'Brendan Leipsic',
            link: '/api/v1/people/8476894',
          },
          jerseyNumber: '28',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476905,
            fullName: 'Chandler Stephenson',
            link: '/api/v1/people/8476905',
          },
          jerseyNumber: '18',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477343,
            fullName: 'Tyler Lewington',
            link: '/api/v1/people/8477343',
          },
          jerseyNumber: '78',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477903,
            fullName: 'Garnet Hathaway',
            link: '/api/v1/people/8477903',
          },
          jerseyNumber: '21',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477944,
            fullName: 'Jakub Vrana',
            link: '/api/v1/people/8477944',
          },
          jerseyNumber: '13',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478399,
            fullName: 'Jonas Siegenthaler',
            link: '/api/v1/people/8478399',
          },
          jerseyNumber: '34',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478492,
            fullName: 'Ilya Samsonov',
            link: '/api/v1/people/8478492',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8479482,
            fullName: 'Michal Kempny',
            link: '/api/v1/people/8479482',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
      ],
      link: '/api/v1/teams/15/roster',
    },
    shortName: 'Washington',
    officialSiteUrl: 'http://www.washingtoncapitals.com/',
    franchiseId: 24,
    active: true,
  },
  {
    id: 16,
    name: 'Chicago Blackhawks',
    link: '/api/v1/teams/16',
    venue: {
      id: 5092,
      name: 'United Center',
      link: '/api/v1/venues/5092',
      city: 'Chicago',
      timeZone: {
        id: 'America/Chicago',
        offset: -6,
        tz: 'CST',
      },
    },
    abbreviation: 'CHI',
    teamName: 'Blackhawks',
    locationName: 'Chicago',
    firstYearOfPlay: '1926',
    division: {
      id: 16,
      name: 'Central',
      nameShort: 'CEN',
      link: '/api/v1/divisions/16',
      abbreviation: 'C',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 11,
      teamName: 'Blackhawks',
      link: '/api/v1/franchises/11',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8476473,
            fullName: 'Connor Murphy',
            link: '/api/v1/people/8476473',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470281,
            fullName: 'Duncan Keith',
            link: '/api/v1/people/8470281',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470607,
            fullName: 'Brent Seabrook',
            link: '/api/v1/people/8470607',
          },
          jerseyNumber: '7',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470645,
            fullName: 'Corey Crawford',
            link: '/api/v1/people/8470645',
          },
          jerseyNumber: '50',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8473604,
            fullName: 'Jonathan Toews',
            link: '/api/v1/people/8473604',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474141,
            fullName: 'Patrick Kane',
            link: '/api/v1/people/8474141',
          },
          jerseyNumber: '88',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8474250,
            fullName: 'Zack Smith',
            link: '/api/v1/people/8474250',
          },
          jerseyNumber: '15',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475177,
            fullName: 'Calvin de Haan',
            link: '/api/v1/people/8475177',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475215,
            fullName: 'Robin Lehner',
            link: '/api/v1/people/8475215',
          },
          jerseyNumber: '40',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476381,
            fullName: 'Andrew Shaw',
            link: '/api/v1/people/8476381',
          },
          jerseyNumber: '65',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476438,
            fullName: 'Brandon Saad',
            link: '/api/v1/people/8476438',
          },
          jerseyNumber: '20',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476874,
            fullName: 'Olli Maatta',
            link: '/api/v1/people/8476874',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476886,
            fullName: 'Slater Koekkoek',
            link: '/api/v1/people/8476886',
          },
          jerseyNumber: '68',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476979,
            fullName: 'Erik Gustafsson',
            link: '/api/v1/people/8476979',
          },
          jerseyNumber: '56',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477330,
            fullName: 'Dominik Kubalik',
            link: '/api/v1/people/8477330',
          },
          jerseyNumber: '8',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477846,
            fullName: 'Ryan Carpenter',
            link: '/api/v1/people/8477846',
          },
          jerseyNumber: '22',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478440,
            fullName: 'Dylan Strome',
            link: '/api/v1/people/8478440',
          },
          jerseyNumber: '17',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479337,
            fullName: 'Alex DeBrincat',
            link: '/api/v1/people/8479337',
          },
          jerseyNumber: '12',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8479423,
            fullName: 'Alex Nylander',
            link: '/api/v1/people/8479423',
          },
          jerseyNumber: '92',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479465,
            fullName: 'Drake Caggiula',
            link: '/api/v1/people/8479465',
          },
          jerseyNumber: '91',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480144,
            fullName: 'David Kampf',
            link: '/api/v1/people/8480144',
          },
          jerseyNumber: '64',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480871,
            fullName: 'Adam Boqvist',
            link: '/api/v1/people/8480871',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8481523,
            fullName: 'Kirby Dach',
            link: '/api/v1/people/8481523',
          },
          jerseyNumber: '77',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/16/roster',
    },
    shortName: 'Chicago',
    officialSiteUrl: 'http://www.chicagoblackhawks.com/',
    franchiseId: 11,
    active: true,
  },
  {
    id: 17,
    name: 'Detroit Red Wings',
    link: '/api/v1/teams/17',
    venue: {
      id: 5145,
      name: 'Little Caesars Arena',
      link: '/api/v1/venues/5145',
      city: 'Detroit',
      timeZone: {
        id: 'America/Detroit',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'DET',
    teamName: 'Red Wings',
    locationName: 'Detroit',
    firstYearOfPlay: '1926',
    division: {
      id: 17,
      name: 'Atlantic',
      nameShort: 'ATL',
      link: '/api/v1/divisions/17',
      abbreviation: 'A',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 12,
      teamName: 'Red Wings',
      link: '/api/v1/franchises/12',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8470110,
            fullName: 'Trevor Daley',
            link: '/api/v1/people/8470110',
          },
          jerseyNumber: '83',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476822,
            fullName: 'Luke Glendening',
            link: '/api/v1/people/8476822',
          },
          jerseyNumber: '41',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477215,
            fullName: 'Danny DeKeyser',
            link: '/api/v1/people/8477215',
          },
          jerseyNumber: '65',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470047,
            fullName: 'Valtteri Filppula',
            link: '/api/v1/people/8470047',
          },
          jerseyNumber: '51',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470144,
            fullName: 'Frans Nielsen',
            link: '/api/v1/people/8470144',
          },
          jerseyNumber: '81',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470657,
            fullName: 'Jimmy Howard',
            link: '/api/v1/people/8470657',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471242,
            fullName: 'Mike Green',
            link: '/api/v1/people/8471242',
          },
          jerseyNumber: '25',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471716,
            fullName: 'Justin Abdelkader',
            link: '/api/v1/people/8471716',
          },
          jerseyNumber: '8',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8471794,
            fullName: 'Darren Helm',
            link: '/api/v1/people/8471794',
          },
          jerseyNumber: '43',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8473415,
            fullName: 'Alex Biega',
            link: '/api/v1/people/8473415',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8473541,
            fullName: 'Jonathan Bernier',
            link: '/api/v1/people/8473541',
          },
          jerseyNumber: '45',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475747,
            fullName: 'Patrik Nemeth',
            link: '/api/v1/people/8475747',
          },
          jerseyNumber: '22',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475795,
            fullName: 'Dylan McIlrath',
            link: '/api/v1/people/8475795',
          },
          jerseyNumber: '20',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476960,
            fullName: 'Andreas Athanasiou',
            link: '/api/v1/people/8476960',
          },
          jerseyNumber: '72',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477454,
            fullName: 'Adam Erne',
            link: '/api/v1/people/8477454',
          },
          jerseyNumber: '73',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477455,
            fullName: 'Jacob de la Rose',
            link: '/api/v1/people/8477455',
          },
          jerseyNumber: '61',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477474,
            fullName: 'Madison Bowey',
            link: '/api/v1/people/8477474',
          },
          jerseyNumber: '74',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477479,
            fullName: 'Tyler Bertuzzi',
            link: '/api/v1/people/8477479',
          },
          jerseyNumber: '59',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477511,
            fullName: 'Anthony Mantha',
            link: '/api/v1/people/8477511',
          },
          jerseyNumber: '39',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477943,
            fullName: 'Brendan Perlini',
            link: '/api/v1/people/8477943',
          },
          jerseyNumber: '29',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477946,
            fullName: 'Dylan Larkin',
            link: '/api/v1/people/8477946',
          },
          jerseyNumber: '71',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478036,
            fullName: 'Christoffer Ehn',
            link: '/api/v1/people/8478036',
          },
          jerseyNumber: '70',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478176,
            fullName: 'Joe Hicketts',
            link: '/api/v1/people/8478176',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479395,
            fullName: 'Dennis Cholowski',
            link: '/api/v1/people/8479395',
          },
          jerseyNumber: '21',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479425,
            fullName: 'Filip Hronek',
            link: '/api/v1/people/8479425',
          },
          jerseyNumber: '17',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8481433,
            fullName: 'Taro Hirose',
            link: '/api/v1/people/8481433',
          },
          jerseyNumber: '67',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
      ],
      link: '/api/v1/teams/17/roster',
    },
    shortName: 'Detroit',
    officialSiteUrl: 'http://www.detroitredwings.com/',
    franchiseId: 12,
    active: true,
  },
  {
    id: 18,
    name: 'Nashville Predators',
    link: '/api/v1/teams/18',
    venue: {
      id: 5030,
      name: 'Bridgestone Arena',
      link: '/api/v1/venues/5030',
      city: 'Nashville',
      timeZone: {
        id: 'America/Chicago',
        offset: -6,
        tz: 'CST',
      },
    },
    abbreviation: 'NSH',
    teamName: 'Predators',
    locationName: 'Nashville',
    firstYearOfPlay: '1997',
    division: {
      id: 16,
      name: 'Central',
      nameShort: 'CEN',
      link: '/api/v1/divisions/16',
      abbreviation: 'C',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 34,
      teamName: 'Predators',
      link: '/api/v1/franchises/34',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8469465,
            fullName: 'Dan Hamhuis',
            link: '/api/v1/people/8469465',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471469,
            fullName: 'Pekka Rinne',
            link: '/api/v1/people/8471469',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8474009,
            fullName: 'Nick Bonino',
            link: '/api/v1/people/8474009',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474068,
            fullName: 'Kyle Turris',
            link: '/api/v1/people/8474068',
          },
          jerseyNumber: '8',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474134,
            fullName: 'Yannick Weber',
            link: '/api/v1/people/8474134',
          },
          jerseyNumber: '7',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474600,
            fullName: 'Roman Josi',
            link: '/api/v1/people/8474600',
          },
          jerseyNumber: '59',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475168,
            fullName: 'Matt Duchene',
            link: '/api/v1/people/8475168',
          },
          jerseyNumber: '95',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475176,
            fullName: 'Ryan Ellis',
            link: '/api/v1/people/8475176',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475218,
            fullName: 'Mattias Ekholm',
            link: '/api/v1/people/8475218',
          },
          jerseyNumber: '14',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475225,
            fullName: 'Craig Smith',
            link: '/api/v1/people/8475225',
          },
          jerseyNumber: '15',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475625,
            fullName: 'Matt Irwin',
            link: '/api/v1/people/8475625',
          },
          jerseyNumber: '52',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475714,
            fullName: 'Calle Jarnkrok',
            link: '/api/v1/people/8475714',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475766,
            fullName: 'Austin Watson',
            link: '/api/v1/people/8475766',
          },
          jerseyNumber: '51',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475793,
            fullName: 'Ryan Johansen',
            link: '/api/v1/people/8475793',
          },
          jerseyNumber: '92',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475798,
            fullName: 'Mikael Granlund',
            link: '/api/v1/people/8475798',
          },
          jerseyNumber: '64',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476428,
            fullName: 'Rocco Grimaldi',
            link: '/api/v1/people/8476428',
          },
          jerseyNumber: '23',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476447,
            fullName: 'Miikka Salomaki',
            link: '/api/v1/people/8476447',
          },
          jerseyNumber: '20',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476887,
            fullName: 'Filip Forsberg',
            link: '/api/v1/people/8476887',
          },
          jerseyNumber: '9',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476925,
            fullName: 'Colton Sissons',
            link: '/api/v1/people/8476925',
          },
          jerseyNumber: '10',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477424,
            fullName: 'Juuse Saros',
            link: '/api/v1/people/8477424',
          },
          jerseyNumber: '74',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8478042,
            fullName: 'Viktor Arvidsson',
            link: '/api/v1/people/8478042',
          },
          jerseyNumber: '33',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479371,
            fullName: 'Dante Fabbro',
            link: '/api/v1/people/8479371',
          },
          jerseyNumber: '57',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
      ],
      link: '/api/v1/teams/18/roster',
    },
    shortName: 'Nashville',
    officialSiteUrl: 'http://www.nashvillepredators.com/',
    franchiseId: 34,
    active: true,
  },
  {
    id: 19,
    name: 'St. Louis Blues',
    link: '/api/v1/teams/19',
    venue: {
      id: 5076,
      name: 'Enterprise Center',
      link: '/api/v1/venues/5076',
      city: 'St. Louis',
      timeZone: {
        id: 'America/Chicago',
        offset: -6,
        tz: 'CST',
      },
    },
    abbreviation: 'STL',
    teamName: 'Blues',
    locationName: 'St. Louis',
    firstYearOfPlay: '1967',
    division: {
      id: 16,
      name: 'Central',
      nameShort: 'CEN',
      link: '/api/v1/divisions/16',
      abbreviation: 'C',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 18,
      teamName: 'Blues',
      link: '/api/v1/franchises/18',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8475765,
            fullName: 'Vladimir Tarasenko',
            link: '/api/v1/people/8475765',
          },
          jerseyNumber: '91',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8470151,
            fullName: 'Jay Bouwmeester',
            link: '/api/v1/people/8470151',
          },
          jerseyNumber: '19',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470257,
            fullName: 'Alexander Steen',
            link: '/api/v1/people/8470257',
          },
          jerseyNumber: '20',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474102,
            fullName: 'David Perron',
            link: '/api/v1/people/8474102',
          },
          jerseyNumber: '57',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474125,
            fullName: 'Carl Gunnarsson',
            link: '/api/v1/people/8474125',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474145,
            fullName: 'Robert Bortuzzo',
            link: '/api/v1/people/8474145',
          },
          jerseyNumber: '41',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474565,
            fullName: 'Alex Pietrangelo',
            link: '/api/v1/people/8474565',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474596,
            fullName: 'Jake Allen',
            link: '/api/v1/people/8474596',
          },
          jerseyNumber: '34',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475098,
            fullName: 'Tyler Bozak',
            link: '/api/v1/people/8475098',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475158,
            fullName: "Ryan O'Reilly",
            link: '/api/v1/people/8475158',
          },
          jerseyNumber: '90',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475170,
            fullName: 'Brayden Schenn',
            link: '/api/v1/people/8475170',
          },
          jerseyNumber: '10',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475753,
            fullName: 'Justin Faulk',
            link: '/api/v1/people/8475753',
          },
          jerseyNumber: '72',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475768,
            fullName: 'Jaden Schwartz',
            link: '/api/v1/people/8475768',
          },
          jerseyNumber: '17',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476412,
            fullName: 'Jordan Binnington',
            link: '/api/v1/people/8476412',
          },
          jerseyNumber: '50',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476892,
            fullName: 'Colton Parayko',
            link: '/api/v1/people/8476892',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476897,
            fullName: 'Oskar Sundqvist',
            link: '/api/v1/people/8476897',
          },
          jerseyNumber: '70',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476907,
            fullName: 'Mackenzie MacEachern',
            link: '/api/v1/people/8476907',
          },
          jerseyNumber: '28',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477482,
            fullName: 'Zach Sanford',
            link: '/api/v1/people/8477482',
          },
          jerseyNumber: '12',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477964,
            fullName: 'Ivan Barbashev',
            link: '/api/v1/people/8477964',
          },
          jerseyNumber: '49',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478104,
            fullName: 'Sammy Blais',
            link: '/api/v1/people/8478104',
          },
          jerseyNumber: '9',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478407,
            fullName: 'Vince Dunn',
            link: '/api/v1/people/8478407',
          },
          jerseyNumber: '29',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480023,
            fullName: 'Robert Thomas',
            link: '/api/v1/people/8480023',
          },
          jerseyNumber: '18',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/19/roster',
    },
    shortName: 'St Louis',
    officialSiteUrl: 'http://www.stlouisblues.com/',
    franchiseId: 18,
    active: true,
  },
  {
    id: 20,
    name: 'Calgary Flames',
    link: '/api/v1/teams/20',
    venue: {
      id: 5075,
      name: 'Scotiabank Saddledome',
      link: '/api/v1/venues/5075',
      city: 'Calgary',
      timeZone: {
        id: 'America/Denver',
        offset: -7,
        tz: 'MST',
      },
    },
    abbreviation: 'CGY',
    teamName: 'Flames',
    locationName: 'Calgary',
    firstYearOfPlay: '1980',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 21,
      teamName: 'Flames',
      link: '/api/v1/franchises/21',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8478512,
            fullName: 'Austin Czarnik',
            link: '/api/v1/people/8478512',
          },
          jerseyNumber: '27',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479976,
            fullName: 'Juuso Valimaki',
            link: '/api/v1/people/8479976',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470966,
            fullName: 'Mark Giordano',
            link: '/api/v1/people/8470966',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8473473,
            fullName: 'Milan Lucic',
            link: '/api/v1/people/8473473',
          },
          jerseyNumber: '17',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8473564,
            fullName: 'Michael Frolik',
            link: '/api/v1/people/8473564',
          },
          jerseyNumber: '67',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8474150,
            fullName: 'Mikael Backlund',
            link: '/api/v1/people/8474150',
          },
          jerseyNumber: '11',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474612,
            fullName: 'Travis Hamonic',
            link: '/api/v1/people/8474612',
          },
          jerseyNumber: '24',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474628,
            fullName: 'Michael Stone',
            link: '/api/v1/people/8474628',
          },
          jerseyNumber: '26',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474673,
            fullName: 'TJ Brodie',
            link: '/api/v1/people/8474673',
          },
          jerseyNumber: '7',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475660,
            fullName: 'Cam Talbot',
            link: '/api/v1/people/8475660',
          },
          jerseyNumber: '39',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476346,
            fullName: 'Johnny Gaudreau',
            link: '/api/v1/people/8476346',
          },
          jerseyNumber: '13',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476356,
            fullName: 'Tobias Rieder',
            link: '/api/v1/people/8476356',
          },
          jerseyNumber: '16',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476873,
            fullName: 'Mark Jankowski',
            link: '/api/v1/people/8476873',
          },
          jerseyNumber: '77',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477496,
            fullName: 'Elias Lindholm',
            link: '/api/v1/people/8477496',
          },
          jerseyNumber: '28',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477497,
            fullName: 'Sean Monahan',
            link: '/api/v1/people/8477497',
          },
          jerseyNumber: '23',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477935,
            fullName: 'Sam Bennett',
            link: '/api/v1/people/8477935',
          },
          jerseyNumber: '93',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478233,
            fullName: 'Andrew Mangiapane',
            link: '/api/v1/people/8478233',
          },
          jerseyNumber: '88',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478396,
            fullName: 'Noah Hanifin',
            link: '/api/v1/people/8478396',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478397,
            fullName: 'Rasmus Andersson',
            link: '/api/v1/people/8478397',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478430,
            fullName: 'Oliver Kylington',
            link: '/api/v1/people/8478430',
          },
          jerseyNumber: '58',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478585,
            fullName: 'Derek Ryan',
            link: '/api/v1/people/8478585',
          },
          jerseyNumber: '10',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479314,
            fullName: 'Matthew Tkachuk',
            link: '/api/v1/people/8479314',
          },
          jerseyNumber: '19',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8479496,
            fullName: 'David Rittich',
            link: '/api/v1/people/8479496',
          },
          jerseyNumber: '33',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
      ],
      link: '/api/v1/teams/20/roster',
    },
    shortName: 'Calgary',
    officialSiteUrl: 'http://www.calgaryflames.com/',
    franchiseId: 21,
    active: true,
  },
  {
    id: 21,
    name: 'Colorado Avalanche',
    link: '/api/v1/teams/21',
    venue: {
      id: 5064,
      name: 'Pepsi Center',
      link: '/api/v1/venues/5064',
      city: 'Denver',
      timeZone: {
        id: 'America/Denver',
        offset: -7,
        tz: 'MST',
      },
    },
    abbreviation: 'COL',
    teamName: 'Avalanche',
    locationName: 'Colorado',
    firstYearOfPlay: '1979',
    division: {
      id: 16,
      name: 'Central',
      nameShort: 'CEN',
      link: '/api/v1/divisions/16',
      abbreviation: 'C',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 27,
      teamName: 'Avalanche',
      link: '/api/v1/franchises/27',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8476455,
            fullName: 'Gabriel Landeskog',
            link: '/api/v1/people/8476455',
          },
          jerseyNumber: '92',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478420,
            fullName: 'Mikko Rantanen',
            link: '/api/v1/people/8478420',
          },
          jerseyNumber: '96',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476391,
            fullName: 'T.J. Tynan',
            link: '/api/v1/people/8476391',
          },
          jerseyNumber: '36',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8473446,
            fullName: 'Erik Johnson',
            link: '/api/v1/people/8473446',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474013,
            fullName: 'Ian Cole',
            link: '/api/v1/people/8474013',
          },
          jerseyNumber: '28',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474569,
            fullName: 'Colin Wilson',
            link: '/api/v1/people/8474569',
          },
          jerseyNumber: '22',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474685,
            fullName: 'Matt Calvert',
            link: '/api/v1/people/8474685',
          },
          jerseyNumber: '11',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474717,
            fullName: 'Mark Barberio',
            link: '/api/v1/people/8474717',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475172,
            fullName: 'Nazem Kadri',
            link: '/api/v1/people/8475172',
          },
          jerseyNumber: '91',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475820,
            fullName: 'Joonas Donskoi',
            link: '/api/v1/people/8475820',
          },
          jerseyNumber: '72',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475831,
            fullName: 'Philipp Grubauer',
            link: '/api/v1/people/8475831',
          },
          jerseyNumber: '31',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476442,
            fullName: 'Matt Nieto',
            link: '/api/v1/people/8476442',
          },
          jerseyNumber: '83',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477435,
            fullName: 'Ryan Graves',
            link: '/api/v1/people/8477435',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477444,
            fullName: 'Andre Burakovsky',
            link: '/api/v1/people/8477444',
          },
          jerseyNumber: '95',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477456,
            fullName: 'J.T. Compher',
            link: '/api/v1/people/8477456',
          },
          jerseyNumber: '37',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477492,
            fullName: 'Nathan MacKinnon',
            link: '/api/v1/people/8477492',
          },
          jerseyNumber: '29',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477501,
            fullName: 'Valeri Nichushkin',
            link: '/api/v1/people/8477501',
          },
          jerseyNumber: '13',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477507,
            fullName: 'Nikita Zadorov',
            link: '/api/v1/people/8477507',
          },
          jerseyNumber: '16',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477930,
            fullName: 'Pierre-Edouard Bellemare',
            link: '/api/v1/people/8477930',
          },
          jerseyNumber: '41',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477973,
            fullName: 'Vladislav Kamenev',
            link: '/api/v1/people/8477973',
          },
          jerseyNumber: '81',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479370,
            fullName: 'Tyson Jost',
            link: '/api/v1/people/8479370',
          },
          jerseyNumber: '17',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479398,
            fullName: 'Samuel Girard',
            link: '/api/v1/people/8479398',
          },
          jerseyNumber: '49',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480069,
            fullName: 'Cale Makar',
            link: '/api/v1/people/8480069',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480925,
            fullName: 'Pavel Francouz',
            link: '/api/v1/people/8480925',
          },
          jerseyNumber: '39',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
      ],
      link: '/api/v1/teams/21/roster',
    },
    shortName: 'Colorado',
    officialSiteUrl: 'http://www.coloradoavalanche.com/',
    franchiseId: 27,
    active: true,
  },
  {
    id: 22,
    name: 'Edmonton Oilers',
    link: '/api/v1/teams/22',
    venue: {
      id: 5100,
      name: 'Rogers Place',
      link: '/api/v1/venues/5100',
      city: 'Edmonton',
      timeZone: {
        id: 'America/Edmonton',
        offset: -7,
        tz: 'MST',
      },
    },
    abbreviation: 'EDM',
    teamName: 'Oilers',
    locationName: 'Edmonton',
    firstYearOfPlay: '1979',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 25,
      teamName: 'Oilers',
      link: '/api/v1/franchises/25',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8476326,
            fullName: 'Josh Archibald',
            link: '/api/v1/people/8476326',
          },
          jerseyNumber: '15',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476457,
            fullName: 'Adam Larsson',
            link: '/api/v1/people/8476457',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8481638,
            fullName: 'Joakim Nygard',
            link: '/api/v1/people/8481638',
          },
          jerseyNumber: '10',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8469608,
            fullName: 'Mike Smith',
            link: '/api/v1/people/8469608',
          },
          jerseyNumber: '41',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471707,
            fullName: 'James Neal',
            link: '/api/v1/people/8471707',
          },
          jerseyNumber: '18',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8471729,
            fullName: 'Kris Russell',
            link: '/api/v1/people/8471729',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474040,
            fullName: 'Sam Gagner',
            link: '/api/v1/people/8474040',
          },
          jerseyNumber: '89',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475156,
            fullName: 'Mikko Koskinen',
            link: '/api/v1/people/8475156',
          },
          jerseyNumber: '19',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475163,
            fullName: 'Alex Chiasson',
            link: '/api/v1/people/8475163',
          },
          jerseyNumber: '39',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475178,
            fullName: 'Zack Kassian',
            link: '/api/v1/people/8475178',
          },
          jerseyNumber: '44',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475430,
            fullName: 'Brandon Manning',
            link: '/api/v1/people/8475430',
          },
          jerseyNumber: '26',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475772,
            fullName: 'Riley Sheahan',
            link: '/api/v1/people/8475772',
          },
          jerseyNumber: '23',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476430,
            fullName: 'Tomas Jurco',
            link: '/api/v1/people/8476430',
          },
          jerseyNumber: '92',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476440,
            fullName: 'Markus Granlund',
            link: '/api/v1/people/8476440',
          },
          jerseyNumber: '60',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476454,
            fullName: 'Ryan Nugent-Hopkins',
            link: '/api/v1/people/8476454',
          },
          jerseyNumber: '93',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476472,
            fullName: 'Oscar Klefbom',
            link: '/api/v1/people/8476472',
          },
          jerseyNumber: '77',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476915,
            fullName: 'Jujhar Khaira',
            link: '/api/v1/people/8476915',
          },
          jerseyNumber: '16',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476988,
            fullName: 'Matt Benning',
            link: '/api/v1/people/8476988',
          },
          jerseyNumber: '83',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477498,
            fullName: 'Darnell Nurse',
            link: '/api/v1/people/8477498',
          },
          jerseyNumber: '25',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477529,
            fullName: 'Colby Cave',
            link: '/api/v1/people/8477529',
          },
          jerseyNumber: '12',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477934,
            fullName: 'Leon Draisaitl',
            link: '/api/v1/people/8477934',
          },
          jerseyNumber: '29',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478402,
            fullName: 'Connor McDavid',
            link: '/api/v1/people/8478402',
          },
          jerseyNumber: '97',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478451,
            fullName: 'Ethan Bear',
            link: '/api/v1/people/8478451',
          },
          jerseyNumber: '74',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479466,
            fullName: 'Patrick Russell',
            link: '/api/v1/people/8479466',
          },
          jerseyNumber: '52',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8480940,
            fullName: 'Joel Persson',
            link: '/api/v1/people/8480940',
          },
          jerseyNumber: '36',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8481813,
            fullName: 'Gaetan Haas',
            link: '/api/v1/people/8481813',
          },
          jerseyNumber: '91',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/22/roster',
    },
    shortName: 'Edmonton',
    officialSiteUrl: 'http://www.edmontonoilers.com/',
    franchiseId: 25,
    active: true,
  },
  {
    id: 23,
    name: 'Vancouver Canucks',
    link: '/api/v1/teams/23',
    venue: {
      id: 5073,
      name: 'Rogers Arena',
      link: '/api/v1/venues/5073',
      city: 'Vancouver',
      timeZone: {
        id: 'America/Vancouver',
        offset: -8,
        tz: 'PST',
      },
    },
    abbreviation: 'VAN',
    teamName: 'Canucks',
    locationName: 'Vancouver',
    firstYearOfPlay: '1970',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 20,
      teamName: 'Canucks',
      link: '/api/v1/franchises/20',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8475907,
            fullName: 'Micheal Ferland',
            link: '/api/v1/people/8475907',
          },
          jerseyNumber: '79',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477353,
            fullName: 'Tyler Motte',
            link: '/api/v1/people/8477353',
          },
          jerseyNumber: '64',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474849,
            fullName: 'Antoine Roussel',
            link: '/api/v1/people/8474849',
          },
          jerseyNumber: '26',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475876,
            fullName: 'Zane McIntyre',
            link: '/api/v1/people/8475876',
          },
          jerseyNumber: '31',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477085,
            fullName: 'Ashton Sautner',
            link: '/api/v1/people/8477085',
          },
          jerseyNumber: '29',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470626,
            fullName: 'Loui Eriksson',
            link: '/api/v1/people/8470626',
          },
          jerseyNumber: '21',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8471303,
            fullName: 'Alexander Edler',
            link: '/api/v1/people/8471303',
          },
          jerseyNumber: '23',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474091,
            fullName: 'Brandon Sutter',
            link: '/api/v1/people/8474091',
          },
          jerseyNumber: '20',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474291,
            fullName: 'Jay Beagle',
            link: '/api/v1/people/8474291',
          },
          jerseyNumber: '83',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474574,
            fullName: 'Tyler Myers',
            link: '/api/v1/people/8474574',
          },
          jerseyNumber: '57',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474593,
            fullName: 'Jacob Markstrom',
            link: '/api/v1/people/8474593',
          },
          jerseyNumber: '25',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8474818,
            fullName: 'Jordie Benn',
            link: '/api/v1/people/8474818',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475690,
            fullName: 'Christopher Tanev',
            link: '/api/v1/people/8475690',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476410,
            fullName: 'Josh Leivo',
            link: '/api/v1/people/8476410',
          },
          jerseyNumber: '17',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476468,
            fullName: 'J.T. Miller',
            link: '/api/v1/people/8476468',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476871,
            fullName: 'Tanner Pearson',
            link: '/api/v1/people/8476871',
          },
          jerseyNumber: '70',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477213,
            fullName: 'Tim Schaller',
            link: '/api/v1/people/8477213',
          },
          jerseyNumber: '59',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477500,
            fullName: 'Bo Horvat',
            link: '/api/v1/people/8477500',
          },
          jerseyNumber: '53',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477937,
            fullName: 'Jake Virtanen',
            link: '/api/v1/people/8477937',
          },
          jerseyNumber: '18',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477967,
            fullName: 'Thatcher Demko',
            link: '/api/v1/people/8477967',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8478444,
            fullName: 'Brock Boeser',
            link: '/api/v1/people/8478444',
          },
          jerseyNumber: '6',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478874,
            fullName: 'Adam Gaudette',
            link: '/api/v1/people/8478874',
          },
          jerseyNumber: '88',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479442,
            fullName: 'Troy Stecher',
            link: '/api/v1/people/8479442',
          },
          jerseyNumber: '51',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480012,
            fullName: 'Elias Pettersson',
            link: '/api/v1/people/8480012',
          },
          jerseyNumber: '40',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480147,
            fullName: 'Oscar Fantenberg',
            link: '/api/v1/people/8480147',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480800,
            fullName: 'Quinn Hughes',
            link: '/api/v1/people/8480800',
          },
          jerseyNumber: '43',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
      ],
      link: '/api/v1/teams/23/roster',
    },
    shortName: 'Vancouver',
    officialSiteUrl: 'http://www.canucks.com/',
    franchiseId: 20,
    active: true,
  },
  {
    id: 24,
    name: 'Anaheim Ducks',
    link: '/api/v1/teams/24',
    venue: {
      id: 5046,
      name: 'Honda Center',
      link: '/api/v1/venues/5046',
      city: 'Anaheim',
      timeZone: {
        id: 'America/Los_Angeles',
        offset: -8,
        tz: 'PST',
      },
    },
    abbreviation: 'ANA',
    teamName: 'Ducks',
    locationName: 'Anaheim',
    firstYearOfPlay: '1993',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 32,
      teamName: 'Ducks',
      link: '/api/v1/franchises/32',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8476312,
            fullName: 'Josh Manson',
            link: '/api/v1/people/8476312',
          },
          jerseyNumber: '42',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8468011,
            fullName: 'Ryan Miller',
            link: '/api/v1/people/8468011',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8470612,
            fullName: 'Ryan Getzlaf',
            link: '/api/v1/people/8470612',
          },
          jerseyNumber: '15',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8473560,
            fullName: 'Korbinian Holzer',
            link: '/api/v1/people/8473560',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474584,
            fullName: 'Michael Del Zotto',
            link: '/api/v1/people/8474584',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474641,
            fullName: 'Adam Henrique',
            link: '/api/v1/people/8474641',
          },
          jerseyNumber: '14',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474683,
            fullName: 'Derek Grant',
            link: '/api/v1/people/8474683',
          },
          jerseyNumber: '38',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475164,
            fullName: 'Jakob Silfverberg',
            link: '/api/v1/people/8475164',
          },
          jerseyNumber: '33',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475235,
            fullName: 'Nicolas Deslauriers',
            link: '/api/v1/people/8475235',
          },
          jerseyNumber: '20',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475764,
            fullName: 'Cam Fowler',
            link: '/api/v1/people/8475764',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475790,
            fullName: 'Erik Gudbranson',
            link: '/api/v1/people/8475790',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476434,
            fullName: 'John Gibson',
            link: '/api/v1/people/8476434',
          },
          jerseyNumber: '36',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476483,
            fullName: 'Rickard Rakell',
            link: '/api/v1/people/8476483',
          },
          jerseyNumber: '67',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476854,
            fullName: 'Hampus Lindholm',
            link: '/api/v1/people/8476854',
          },
          jerseyNumber: '47',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476913,
            fullName: 'Devin Shore',
            link: '/api/v1/people/8476913',
          },
          jerseyNumber: '29',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477240,
            fullName: 'Carter Rowney',
            link: '/api/v1/people/8477240',
          },
          jerseyNumber: '24',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477941,
            fullName: 'Nick Ritchie',
            link: '/api/v1/people/8477941',
          },
          jerseyNumber: '37',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478131,
            fullName: 'Ondrej Kase',
            link: '/api/v1/people/8478131',
          },
          jerseyNumber: '25',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478491,
            fullName: 'Jacob Larsson',
            link: '/api/v1/people/8478491',
          },
          jerseyNumber: '32',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478873,
            fullName: 'Troy Terry',
            link: '/api/v1/people/8478873',
          },
          jerseyNumber: '61',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479351,
            fullName: 'Sam Steel',
            link: '/api/v1/people/8479351',
          },
          jerseyNumber: '34',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479368,
            fullName: 'Max Jones',
            link: '/api/v1/people/8479368',
          },
          jerseyNumber: '49',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8480031,
            fullName: 'Max Comtois',
            link: '/api/v1/people/8480031',
          },
          jerseyNumber: '53',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
      ],
      link: '/api/v1/teams/24/roster',
    },
    shortName: 'Anaheim',
    officialSiteUrl: 'http://www.anaheimducks.com/',
    franchiseId: 32,
    active: true,
  },
  {
    id: 25,
    name: 'Dallas Stars',
    link: '/api/v1/teams/25',
    venue: {
      id: 5019,
      name: 'American Airlines Center',
      link: '/api/v1/venues/5019',
      city: 'Dallas',
      timeZone: {
        id: 'America/Chicago',
        offset: -6,
        tz: 'CST',
      },
    },
    abbreviation: 'DAL',
    teamName: 'Stars',
    locationName: 'Dallas',
    firstYearOfPlay: '1967',
    division: {
      id: 16,
      name: 'Central',
      nameShort: 'CEN',
      link: '/api/v1/divisions/16',
      abbreviation: 'C',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 15,
      teamName: 'Stars',
      link: '/api/v1/franchises/15',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8471392,
            fullName: 'Roman Polak',
            link: '/api/v1/people/8471392',
          },
          jerseyNumber: '45',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471691,
            fullName: 'Martin Hanzal',
            link: '/api/v1/people/8471691',
          },
          jerseyNumber: '40',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475730,
            fullName: 'Stephen Johns',
            link: '/api/v1/people/8475730',
          },
          jerseyNumber: '28',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470621,
            fullName: 'Corey Perry',
            link: '/api/v1/people/8470621',
          },
          jerseyNumber: '10',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8470794,
            fullName: 'Joe Pavelski',
            link: '/api/v1/people/8470794',
          },
          jerseyNumber: '16',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471228,
            fullName: 'Alexander Radulov',
            link: '/api/v1/people/8471228',
          },
          jerseyNumber: '47',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8471260,
            fullName: 'Blake Comeau',
            link: '/api/v1/people/8471260',
          },
          jerseyNumber: '15',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8471284,
            fullName: 'Andrej Sekera',
            link: '/api/v1/people/8471284',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471418,
            fullName: 'Anton Khudobin',
            link: '/api/v1/people/8471418',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471699,
            fullName: 'Andrew Cogliano',
            link: '/api/v1/people/8471699',
          },
          jerseyNumber: '11',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471750,
            fullName: 'Ben Bishop',
            link: '/api/v1/people/8471750',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8473994,
            fullName: 'Jamie Benn',
            link: '/api/v1/people/8473994',
          },
          jerseyNumber: '14',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475413,
            fullName: 'Justin Dowling',
            link: '/api/v1/people/8475413',
          },
          jerseyNumber: '37',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475794,
            fullName: 'Tyler Seguin',
            link: '/api/v1/people/8475794',
          },
          jerseyNumber: '91',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475906,
            fullName: 'John Klingberg',
            link: '/api/v1/people/8475906',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476166,
            fullName: 'Taylor Fedun',
            link: '/api/v1/people/8476166',
          },
          jerseyNumber: '42',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476467,
            fullName: 'Jamie Oleksiak',
            link: '/api/v1/people/8476467',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476889,
            fullName: 'Radek Faksa',
            link: '/api/v1/people/8476889',
          },
          jerseyNumber: '12',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476902,
            fullName: 'Esa Lindell',
            link: '/api/v1/people/8476902',
          },
          jerseyNumber: '23',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477406,
            fullName: 'Mattias Janmark',
            link: '/api/v1/people/8477406',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477450,
            fullName: 'Jason Dickinson',
            link: '/api/v1/people/8477450',
          },
          jerseyNumber: '18',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478449,
            fullName: 'Roope Hintz',
            link: '/api/v1/people/8478449',
          },
          jerseyNumber: '24',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478495,
            fullName: 'Denis Gurianov',
            link: '/api/v1/people/8478495',
          },
          jerseyNumber: '34',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8480036,
            fullName: 'Miro Heiskanen',
            link: '/api/v1/people/8480036',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
      ],
      link: '/api/v1/teams/25/roster',
    },
    shortName: 'Dallas',
    officialSiteUrl: 'http://www.dallasstars.com/',
    franchiseId: 15,
    active: true,
  },
  {
    id: 26,
    name: 'Los Angeles Kings',
    link: '/api/v1/teams/26',
    venue: {
      id: 5081,
      name: 'STAPLES Center',
      link: '/api/v1/venues/5081',
      city: 'Los Angeles',
      timeZone: {
        id: 'America/Los_Angeles',
        offset: -8,
        tz: 'PST',
      },
    },
    abbreviation: 'LAK',
    teamName: 'Kings',
    locationName: 'Los Angeles',
    firstYearOfPlay: '1967',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 14,
      teamName: 'Kings',
      link: '/api/v1/franchises/14',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8469454,
            fullName: 'Ilya Kovalchuk',
            link: '/api/v1/people/8469454',
          },
          jerseyNumber: '17',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8470604,
            fullName: 'Jeff Carter',
            link: '/api/v1/people/8470604',
          },
          jerseyNumber: '77',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470606,
            fullName: 'Dustin Brown',
            link: '/api/v1/people/8470606',
          },
          jerseyNumber: '23',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8471685,
            fullName: 'Anze Kopitar',
            link: '/api/v1/people/8471685',
          },
          jerseyNumber: '11',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471734,
            fullName: 'Jonathan Quick',
            link: '/api/v1/people/8471734',
          },
          jerseyNumber: '32',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8473453,
            fullName: 'Trevor Lewis',
            link: '/api/v1/people/8473453',
          },
          jerseyNumber: '22',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474166,
            fullName: 'Alec Martinez',
            link: '/api/v1/people/8474166',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474563,
            fullName: 'Drew Doughty',
            link: '/api/v1/people/8474563',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475160,
            fullName: 'Kyle Clifford',
            link: '/api/v1/people/8475160',
          },
          jerseyNumber: '13',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475726,
            fullName: 'Tyler Toffoli',
            link: '/api/v1/people/8475726',
          },
          jerseyNumber: '73',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475789,
            fullName: 'Jack Campbell',
            link: '/api/v1/people/8475789',
          },
          jerseyNumber: '36',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476947,
            fullName: 'Nikolai Prokhorkin',
            link: '/api/v1/people/8476947',
          },
          jerseyNumber: '74',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477018,
            fullName: 'Ben Hutton',
            link: '/api/v1/people/8477018',
          },
          jerseyNumber: '15',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477046,
            fullName: 'Joakim Ryan',
            link: '/api/v1/people/8477046',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477073,
            fullName: 'Kurtis MacDermid',
            link: '/api/v1/people/8477073',
          },
          jerseyNumber: '56',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477960,
            fullName: 'Adrian Kempe',
            link: '/api/v1/people/8477960',
          },
          jerseyNumber: '9',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478020,
            fullName: 'Michael Amadio',
            link: '/api/v1/people/8478020',
          },
          jerseyNumber: '10',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478455,
            fullName: 'Austin Wagner',
            link: '/api/v1/people/8478455',
          },
          jerseyNumber: '51',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478911,
            fullName: 'Matt Roy',
            link: '/api/v1/people/8478911',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479336,
            fullName: 'Carl Grundstrom',
            link: '/api/v1/people/8479336',
          },
          jerseyNumber: '38',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8480113,
            fullName: 'Alex Iafallo',
            link: '/api/v1/people/8480113',
          },
          jerseyNumber: '19',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8480336,
            fullName: 'Sean Walker',
            link: '/api/v1/people/8480336',
          },
          jerseyNumber: '26',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8481481,
            fullName: 'Blake Lizotte',
            link: '/api/v1/people/8481481',
          },
          jerseyNumber: '46',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/26/roster',
    },
    shortName: 'Los Angeles',
    officialSiteUrl: 'http://www.lakings.com/',
    franchiseId: 14,
    active: true,
  },
  {
    id: 28,
    name: 'San Jose Sharks',
    link: '/api/v1/teams/28',
    venue: {
      name: 'SAP Center at San Jose',
      link: '/api/v1/venues/null',
      city: 'San Jose',
      timeZone: {
        id: 'America/Los_Angeles',
        offset: -8,
        tz: 'PST',
      },
    },
    abbreviation: 'SJS',
    teamName: 'Sharks',
    locationName: 'San Jose',
    firstYearOfPlay: '1990',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 29,
      teamName: 'Sharks',
      link: '/api/v1/franchises/29',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8474774,
            fullName: 'Dalton Prout',
            link: '/api/v1/people/8474774',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478136,
            fullName: 'Jacob Middleton',
            link: '/api/v1/people/8478136',
          },
          jerseyNumber: '67',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8466138,
            fullName: 'Joe Thornton',
            link: '/api/v1/people/8466138',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8466139,
            fullName: 'Patrick Marleau',
            link: '/api/v1/people/8466139',
          },
          jerseyNumber: '12',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470613,
            fullName: 'Brent Burns',
            link: '/api/v1/people/8470613',
          },
          jerseyNumber: '88',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471709,
            fullName: 'Marc-Edouard Vlasic',
            link: '/api/v1/people/8471709',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474053,
            fullName: 'Logan Couture',
            link: '/api/v1/people/8474053',
          },
          jerseyNumber: '39',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474578,
            fullName: 'Erik Karlsson',
            link: '/api/v1/people/8474578',
          },
          jerseyNumber: '65',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474889,
            fullName: 'Martin Jones',
            link: '/api/v1/people/8474889',
          },
          jerseyNumber: '31',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8475169,
            fullName: 'Evander Kane',
            link: '/api/v1/people/8475169',
          },
          jerseyNumber: '9',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475455,
            fullName: 'Brenden Dillon',
            link: '/api/v1/people/8475455',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475834,
            fullName: 'Marcus Sorensen',
            link: '/api/v1/people/8475834',
          },
          jerseyNumber: '20',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475841,
            fullName: 'Tim Heed',
            link: '/api/v1/people/8475841',
          },
          jerseyNumber: '72',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476624,
            fullName: 'Barclay Goodrow',
            link: '/api/v1/people/8476624',
          },
          jerseyNumber: '23',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476881,
            fullName: 'Tomas Hertl',
            link: '/api/v1/people/8476881',
          },
          jerseyNumber: '48',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477180,
            fullName: 'Aaron Dell',
            link: '/api/v1/people/8477180',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477922,
            fullName: 'Melker Karlsson',
            link: '/api/v1/people/8477922',
          },
          jerseyNumber: '68',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478099,
            fullName: 'Kevin Labanc',
            link: '/api/v1/people/8478099',
          },
          jerseyNumber: '62',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478414,
            fullName: 'Timo Meier',
            link: '/api/v1/people/8478414',
          },
          jerseyNumber: '28',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8479393,
            fullName: 'Noah Gregor',
            link: '/api/v1/people/8479393',
          },
          jerseyNumber: '73',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479580,
            fullName: 'Dylan Gambrell',
            link: '/api/v1/people/8479580',
          },
          jerseyNumber: '7',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479983,
            fullName: 'Mario Ferraro',
            link: '/api/v1/people/8479983',
          },
          jerseyNumber: '38',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480160,
            fullName: 'Radim Simek',
            link: '/api/v1/people/8480160',
          },
          jerseyNumber: '51',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480780,
            fullName: 'Lukas Radil',
            link: '/api/v1/people/8480780',
          },
          jerseyNumber: '52',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8481640,
            fullName: 'Lean Bergmann',
            link: '/api/v1/people/8481640',
          },
          jerseyNumber: '45',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/28/roster',
    },
    shortName: 'San Jose',
    officialSiteUrl: 'http://www.sjsharks.com/',
    franchiseId: 29,
    active: true,
  },
  {
    id: 29,
    name: 'Columbus Blue Jackets',
    link: '/api/v1/teams/29',
    venue: {
      id: 5059,
      name: 'Nationwide Arena',
      link: '/api/v1/venues/5059',
      city: 'Columbus',
      timeZone: {
        id: 'America/New_York',
        offset: -5,
        tz: 'EST',
      },
    },
    abbreviation: 'CBJ',
    teamName: 'Blue Jackets',
    locationName: 'Columbus',
    firstYearOfPlay: '1997',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M',
    } as const,
    conference: {
      id: 6,
      name: 'Eastern',
      link: '/api/v1/conferences/6',
    } as const,
    franchise: {
      franchiseId: 36,
      teamName: 'Blue Jackets',
      link: '/api/v1/franchises/36',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8471273,
            fullName: 'Brandon Dubinsky',
            link: '/api/v1/people/8471273',
          },
          jerseyNumber: '17',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476850,
            fullName: 'Ryan Murray',
            link: '/api/v1/people/8476850',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8473422,
            fullName: 'Nick Foligno',
            link: '/api/v1/people/8473422',
          },
          jerseyNumber: '71',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474062,
            fullName: 'Riley Nash',
            link: '/api/v1/people/8474062',
          },
          jerseyNumber: '20',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474679,
            fullName: 'Gustav Nyquist',
            link: '/api/v1/people/8474679',
          },
          jerseyNumber: '14',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474715,
            fullName: 'Cam Atkinson',
            link: '/api/v1/people/8474715',
          },
          jerseyNumber: '13',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475233,
            fullName: 'David Savard',
            link: '/api/v1/people/8475233',
          },
          jerseyNumber: '58',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476432,
            fullName: 'Boone Jenner',
            link: '/api/v1/people/8476432',
          },
          jerseyNumber: '38',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476449,
            fullName: 'Scott Harrington',
            link: '/api/v1/people/8476449',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476914,
            fullName: 'Joonas Korpisalo',
            link: '/api/v1/people/8476914',
          },
          jerseyNumber: '70',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476981,
            fullName: 'Josh Anderson',
            link: '/api/v1/people/8476981',
          },
          jerseyNumber: '77',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477416,
            fullName: 'Oliver Bjorkstrand',
            link: '/api/v1/people/8477416',
          },
          jerseyNumber: '28',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477495,
            fullName: 'Seth Jones',
            link: '/api/v1/people/8477495',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477505,
            fullName: 'Alexander Wennberg',
            link: '/api/v1/people/8477505',
          },
          jerseyNumber: '10',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477947,
            fullName: 'Sonny Milano',
            link: '/api/v1/people/8477947',
          },
          jerseyNumber: '22',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478460,
            fullName: 'Zach Werenski',
            link: '/api/v1/people/8478460',
          },
          jerseyNumber: '8',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478567,
            fullName: 'Dean Kukan',
            link: '/api/v1/people/8478567',
          },
          jerseyNumber: '46',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478882,
            fullName: 'Vladislav Gavrikov',
            link: '/api/v1/people/8478882',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478906,
            fullName: 'Markus Nutivaara',
            link: '/api/v1/people/8478906',
          },
          jerseyNumber: '65',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478949,
            fullName: 'Kole Sherwood',
            link: '/api/v1/people/8478949',
          },
          jerseyNumber: '88',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8479400,
            fullName: 'Pierre-Luc Dubois',
            link: '/api/v1/people/8479400',
          },
          jerseyNumber: '18',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8480074,
            fullName: 'Alexandre Texier',
            link: '/api/v1/people/8480074',
          },
          jerseyNumber: '42',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8480162,
            fullName: 'Matiss Kivlenieks',
            link: '/api/v1/people/8480162',
          },
          jerseyNumber: '80',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8480205,
            fullName: 'Emil Bemstrom',
            link: '/api/v1/people/8480205',
          },
          jerseyNumber: '52',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/29/roster',
    },
    shortName: 'Columbus',
    officialSiteUrl: 'http://www.bluejackets.com/',
    franchiseId: 36,
    active: true,
  },
  {
    id: 30,
    name: 'Minnesota Wild',
    link: '/api/v1/teams/30',
    venue: {
      id: 5098,
      name: 'Xcel Energy Center',
      link: '/api/v1/venues/5098',
      city: 'St. Paul',
      timeZone: {
        id: 'America/Chicago',
        offset: -6,
        tz: 'CST',
      },
    },
    abbreviation: 'MIN',
    teamName: 'Wild',
    locationName: 'Minnesota',
    firstYearOfPlay: '1997',
    division: {
      id: 16,
      name: 'Central',
      nameShort: 'CEN',
      link: '/api/v1/divisions/16',
      abbreviation: 'C',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 37,
      teamName: 'Wild',
      link: '/api/v1/franchises/37',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8474688,
            fullName: 'Greg Pateryn',
            link: '/api/v1/people/8474688',
          },
          jerseyNumber: '29',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8479933,
            fullName: 'Gerald Mayhew',
            link: '/api/v1/people/8479933',
          },
          jerseyNumber: '26',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8469459,
            fullName: 'Mikko Koivu',
            link: '/api/v1/people/8469459',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470595,
            fullName: 'Eric Staal',
            link: '/api/v1/people/8470595',
          },
          jerseyNumber: '12',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470600,
            fullName: 'Ryan Suter',
            link: '/api/v1/people/8470600',
          },
          jerseyNumber: '20',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470610,
            fullName: 'Zach Parise',
            link: '/api/v1/people/8470610',
          },
          jerseyNumber: '11',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8471227,
            fullName: 'Devan Dubnyk',
            link: '/api/v1/people/8471227',
          },
          jerseyNumber: '40',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471774,
            fullName: 'Alex Stalock',
            link: '/api/v1/people/8471774',
          },
          jerseyNumber: '32',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8474716,
            fullName: 'Jared Spurgeon',
            link: '/api/v1/people/8474716',
          },
          jerseyNumber: '46',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475220,
            fullName: 'Marcus Foligno',
            link: '/api/v1/people/8475220',
          },
          jerseyNumber: '17',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475692,
            fullName: 'Mats Zuccarello',
            link: '/api/v1/people/8475692',
          },
          jerseyNumber: '36',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475722,
            fullName: 'Jason Zucker',
            link: '/api/v1/people/8475722',
          },
          jerseyNumber: '16',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476372,
            fullName: 'Nick Seeler',
            link: '/api/v1/people/8476372',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476437,
            fullName: 'Victor Rask',
            link: '/api/v1/people/8476437',
          },
          jerseyNumber: '49',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476463,
            fullName: 'Jonas Brodin',
            link: '/api/v1/people/8476463',
          },
          jerseyNumber: '25',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476779,
            fullName: 'Brad Hunt',
            link: '/api/v1/people/8476779',
          },
          jerseyNumber: '77',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476856,
            fullName: 'Matt Dumba',
            link: '/api/v1/people/8476856',
          },
          jerseyNumber: '24',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477369,
            fullName: 'Carson Soucy',
            link: '/api/v1/people/8477369',
          },
          jerseyNumber: '21',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477451,
            fullName: 'Ryan Hartman',
            link: '/api/v1/people/8477451',
          },
          jerseyNumber: '38',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8477942,
            fullName: 'Kevin Fiala',
            link: '/api/v1/people/8477942',
          },
          jerseyNumber: '22',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477987,
            fullName: 'Ryan Donato',
            link: '/api/v1/people/8477987',
          },
          jerseyNumber: '6',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478413,
            fullName: 'Jordan Greenway',
            link: '/api/v1/people/8478413',
          },
          jerseyNumber: '18',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478493,
            fullName: 'Joel Eriksson Ek',
            link: '/api/v1/people/8478493',
          },
          jerseyNumber: '14',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479316,
            fullName: 'Luke Kunin',
            link: '/api/v1/people/8479316',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/30/roster',
    },
    shortName: 'Minnesota',
    officialSiteUrl: 'http://www.wild.com/',
    franchiseId: 37,
    active: true,
  },
  {
    id: 52,
    name: 'Winnipeg Jets',
    link: '/api/v1/teams/52',
    venue: {
      id: 5058,
      name: 'Bell MTS Place',
      link: '/api/v1/venues/5058',
      city: 'Winnipeg',
      timeZone: {
        id: 'America/Winnipeg',
        offset: -6,
        tz: 'CST',
      },
    },
    abbreviation: 'WPG',
    teamName: 'Jets',
    locationName: 'Winnipeg',
    firstYearOfPlay: '2011',
    division: {
      id: 16,
      name: 'Central',
      nameShort: 'CEN',
      link: '/api/v1/divisions/16',
      abbreviation: 'C',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 35,
      teamName: 'Jets',
      link: '/api/v1/franchises/35',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8473412,
            fullName: 'Bryan Little',
            link: '/api/v1/people/8473412',
          },
          jerseyNumber: '18',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8473914,
            fullName: 'Mark Letestu',
            link: '/api/v1/people/8473914',
          },
          jerseyNumber: '22',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8478891,
            fullName: 'Mason Appleton',
            link: '/api/v1/people/8478891',
          },
          jerseyNumber: '82',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8470834,
            fullName: 'Dustin Byfuglien',
            link: '/api/v1/people/8470834',
          },
          jerseyNumber: '33',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471218,
            fullName: 'Blake Wheeler',
            link: '/api/v1/people/8471218',
          },
          jerseyNumber: '26',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8473618,
            fullName: 'Mathieu Perreault',
            link: '/api/v1/people/8473618',
          },
          jerseyNumber: '85',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474579,
            fullName: 'Luca Sbisa',
            link: '/api/v1/people/8474579',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475179,
            fullName: 'Dmitry Kulikov',
            link: '/api/v1/people/8475179',
          },
          jerseyNumber: '7',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475268,
            fullName: 'Gabriel Bourque',
            link: '/api/v1/people/8475268',
          },
          jerseyNumber: '57',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8475868,
            fullName: 'Anthony Bitetto',
            link: '/api/v1/people/8475868',
          },
          jerseyNumber: '2',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476316,
            fullName: 'Laurent Brossoit',
            link: '/api/v1/people/8476316',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476392,
            fullName: 'Adam Lowry',
            link: '/api/v1/people/8476392',
          },
          jerseyNumber: '17',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8476400,
            fullName: 'Logan Shaw',
            link: '/api/v1/people/8476400',
          },
          jerseyNumber: '38',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476460,
            fullName: 'Mark Scheifele',
            link: '/api/v1/people/8476460',
          },
          jerseyNumber: '55',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476470,
            fullName: 'Nathan Beaulieu',
            link: '/api/v1/people/8476470',
          },
          jerseyNumber: '88',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8476945,
            fullName: 'Connor Hellebuyck',
            link: '/api/v1/people/8476945',
          },
          jerseyNumber: '37',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477359,
            fullName: 'Tucker Poolman',
            link: '/api/v1/people/8477359',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477429,
            fullName: 'Andrew Copp',
            link: '/api/v1/people/8477429',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477472,
            fullName: 'Carl Dahlstrom',
            link: '/api/v1/people/8477472',
          },
          jerseyNumber: '23',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477504,
            fullName: 'Josh Morrissey',
            link: '/api/v1/people/8477504',
          },
          jerseyNumber: '44',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477940,
            fullName: 'Nikolaj Ehlers',
            link: '/api/v1/people/8477940',
          },
          jerseyNumber: '27',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478398,
            fullName: 'Kyle Connor',
            link: '/api/v1/people/8478398',
          },
          jerseyNumber: '81',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478458,
            fullName: 'Jack Roslovic',
            link: '/api/v1/people/8478458',
          },
          jerseyNumber: '28',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479339,
            fullName: 'Patrik Laine',
            link: '/api/v1/people/8479339',
          },
          jerseyNumber: '29',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8480145,
            fullName: 'Neal Pionk',
            link: '/api/v1/people/8480145',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8481019,
            fullName: 'David Gustafsson',
            link: '/api/v1/people/8481019',
          },
          jerseyNumber: '19',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/52/roster',
    },
    shortName: 'Winnipeg',
    officialSiteUrl: 'http://winnipegjets.com/',
    franchiseId: 35,
    active: true,
  },
  {
    id: 53,
    name: 'Arizona Coyotes',
    link: '/api/v1/teams/53',
    venue: {
      id: 5043,
      name: 'Gila River Arena',
      link: '/api/v1/venues/5043',
      city: 'Glendale',
      timeZone: {
        id: 'America/Phoenix',
        offset: -7,
        tz: 'MST',
      },
    },
    abbreviation: 'ARI',
    teamName: 'Coyotes',
    locationName: 'Arizona',
    firstYearOfPlay: '1979',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 28,
      teamName: 'Coyotes',
      link: '/api/v1/franchises/28',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8470755,
            fullName: 'Brad Richardson',
            link: '/api/v1/people/8470755',
          },
          jerseyNumber: '15',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8471769,
            fullName: 'Niklas Hjalmarsson',
            link: '/api/v1/people/8471769',
          },
          jerseyNumber: '4',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8471262,
            fullName: 'Carl Soderberg',
            link: '/api/v1/people/8471262',
          },
          jerseyNumber: '34',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471274,
            fullName: 'Alex Goligoski',
            link: '/api/v1/people/8471274',
          },
          jerseyNumber: '33',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8473546,
            fullName: 'Michael Grabner',
            link: '/api/v1/people/8473546',
          },
          jerseyNumber: '40',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8473548,
            fullName: 'Phil Kessel',
            link: '/api/v1/people/8473548',
          },
          jerseyNumber: '81',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8474218,
            fullName: 'Jason Demers',
            link: '/api/v1/people/8474218',
          },
          jerseyNumber: '55',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474604,
            fullName: 'Aaron Ness',
            link: '/api/v1/people/8474604',
          },
          jerseyNumber: '42',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8474613,
            fullName: 'Derek Stepan',
            link: '/api/v1/people/8474613',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475171,
            fullName: 'Oliver Ekman-Larsson',
            link: '/api/v1/people/8475171',
          },
          jerseyNumber: '23',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475311,
            fullName: 'Darcy Kuemper',
            link: '/api/v1/people/8475311',
          },
          jerseyNumber: '35',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8476994,
            fullName: 'Vinnie Hinostroza',
            link: '/api/v1/people/8476994',
          },
          jerseyNumber: '13',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477293,
            fullName: 'Antti Raanta',
            link: '/api/v1/people/8477293',
          },
          jerseyNumber: '32',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477480,
            fullName: 'Eric Comrie',
            link: '/api/v1/people/8477480',
          },
          jerseyNumber: '1',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477851,
            fullName: 'Jordan Oesterle',
            link: '/api/v1/people/8477851',
          },
          jerseyNumber: '82',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477951,
            fullName: 'Nick Schmaltz',
            link: '/api/v1/people/8477951',
          },
          jerseyNumber: '8',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8477989,
            fullName: 'Christian Dvorak',
            link: '/api/v1/people/8477989',
          },
          jerseyNumber: '18',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478432,
            fullName: 'Christian Fischer',
            link: '/api/v1/people/8478432',
          },
          jerseyNumber: '36',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8478474,
            fullName: 'Lawson Crouse',
            link: '/api/v1/people/8478474',
          },
          jerseyNumber: '67',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8478476,
            fullName: 'Kyle Capobianco',
            link: '/api/v1/people/8478476',
          },
          jerseyNumber: '75',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8478856,
            fullName: 'Conor Garland',
            link: '/api/v1/people/8478856',
          },
          jerseyNumber: '83',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8479343,
            fullName: 'Clayton Keller',
            link: '/api/v1/people/8479343',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8479345,
            fullName: 'Jakob Chychrun',
            link: '/api/v1/people/8479345',
          },
          jerseyNumber: '6',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8480849,
            fullName: 'Barrett Hayton',
            link: '/api/v1/people/8480849',
          },
          jerseyNumber: '29',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/53/roster',
    },
    shortName: 'Arizona',
    officialSiteUrl: 'http://www.arizonacoyotes.com/',
    franchiseId: 28,
    active: true,
  },
  {
    id: 54,
    name: 'Vegas Golden Knights',
    link: '/api/v1/teams/54',
    venue: {
      id: 5178,
      name: 'T-Mobile Arena',
      link: '/api/v1/venues/5178',
      city: 'Las Vegas',
      timeZone: {
        id: 'America/Los_Angeles',
        offset: -8,
        tz: 'PST',
      },
    },
    abbreviation: 'VGK',
    teamName: 'Golden Knights',
    locationName: 'Vegas',
    firstYearOfPlay: '2016',
    division: {
      id: 15,
      name: 'Pacific',
      nameShort: 'PAC',
      link: '/api/v1/divisions/15',
      abbreviation: 'P',
    } as const,
    conference: {
      id: 5,
      name: 'Western',
      link: '/api/v1/conferences/5',
    } as const,
    franchise: {
      franchiseId: 38,
      teamName: 'Golden Knights',
      link: '/api/v1/franchises/38',
    },
    roster: {
      roster: [
        {
          person: {
            id: 8468674,
            fullName: 'Deryk Engelland',
            link: '/api/v1/people/8468674',
          },
          jerseyNumber: '5',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8470594,
            fullName: 'Marc-Andre Fleury',
            link: '/api/v1/people/8470594',
          },
          jerseyNumber: '29',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8471669,
            fullName: 'Paul Stastny',
            link: '/api/v1/people/8471669',
          },
          jerseyNumber: '26',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8471817,
            fullName: 'Ryan Reaves',
            link: '/api/v1/people/8471817',
          },
          jerseyNumber: '75',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8474157,
            fullName: 'Max Pacioretty',
            link: '/api/v1/people/8474157',
          },
          jerseyNumber: '67',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8474207,
            fullName: 'Nick Holden',
            link: '/api/v1/people/8474207',
          },
          jerseyNumber: '22',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475188,
            fullName: 'Brayden McNabb',
            link: '/api/v1/people/8475188',
          },
          jerseyNumber: '3',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475191,
            fullName: 'Reilly Smith',
            link: '/api/v1/people/8475191',
          },
          jerseyNumber: '19',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8475204,
            fullName: 'Brandon Pirri',
            link: '/api/v1/people/8475204',
          },
          jerseyNumber: '73',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475236,
            fullName: 'Cody Eakin',
            link: '/api/v1/people/8475236',
          },
          jerseyNumber: '21',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8475750,
            fullName: 'Jon Merrill',
            link: '/api/v1/people/8475750',
          },
          jerseyNumber: '15',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8475913,
            fullName: 'Mark Stone',
            link: '/api/v1/people/8475913',
          },
          jerseyNumber: '61',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8476448,
            fullName: 'William Karlsson',
            link: '/api/v1/people/8476448',
          },
          jerseyNumber: '71',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476539,
            fullName: 'Jonathan Marchessault',
            link: '/api/v1/people/8476539',
          },
          jerseyNumber: '81',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
        {
          person: {
            id: 8476876,
            fullName: 'Malcolm Subban',
            link: '/api/v1/people/8476876',
          },
          jerseyNumber: '30',
          position: {
            code: 'G',
            name: 'Goalie',
            type: 'Goalie',
            abbreviation: 'G',
          },
        },
        {
          person: {
            id: 8477220,
            fullName: 'Nate Schmidt',
            link: '/api/v1/people/8477220',
          },
          jerseyNumber: '88',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477447,
            fullName: 'Shea Theodore',
            link: '/api/v1/people/8477447',
          },
          jerseyNumber: '27',
          position: {
            code: 'D',
            name: 'Defenseman',
            type: 'Defenseman',
            abbreviation: 'D',
          },
        },
        {
          person: {
            id: 8477478,
            fullName: 'William Carrier',
            link: '/api/v1/people/8477478',
          },
          jerseyNumber: '28',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477931,
            fullName: 'Tomas Nosek',
            link: '/api/v1/people/8477931',
          },
          jerseyNumber: '92',
          position: {
            code: 'L',
            name: 'Left Wing',
            type: 'Forward',
            abbreviation: 'LW',
          },
        },
        {
          person: {
            id: 8477949,
            fullName: 'Alex Tuch',
            link: '/api/v1/people/8477949',
          },
          jerseyNumber: '89',
          position: {
            code: 'R',
            name: 'Right Wing',
            type: 'Forward',
            abbreviation: 'RW',
          },
        },
        {
          person: {
            id: 8479996,
            fullName: 'Cody Glass',
            link: '/api/v1/people/8479996',
          },
          jerseyNumber: '9',
          position: {
            code: 'C',
            name: 'Center',
            type: 'Forward',
            abbreviation: 'C',
          },
        },
      ],
      link: '/api/v1/teams/54/roster',
    },
    shortName: 'Vegas',
    officialSiteUrl: 'http://www.vegasgoldenknights.com/',
    franchiseId: 38,
    active: true,
  },
];

export default teams;
