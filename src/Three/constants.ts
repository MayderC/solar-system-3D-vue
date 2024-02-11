type planets = {
  [key: string]: string
}

const SOLAR_S: planets = {
  Earth_Icosphere: 'Earth_Icosphere',
  Moon_Icosphere001: 'Moon_Icosphere001',
  Venus_Icosphere004: 'Venus_Icosphere004',
  Mars_Icosphere002: 'Mars_Icosphere002',
  Mercury_Icosphere005: 'Mercury_Icosphere005',
  Jupiter_Icosphere006: 'Jupiter_Icosphere006',
  uranus_Icosphere009: 'uranus_Icosphere009',
  Neptune_Icosphere010: 'Neptune_Icosphere010',
  Sun_Icosphere012: 'Sun_Icosphere012',
  SaturnsRings_Circle: 'SaturnsRings_Circle',
  Saturn_Icosphere007: 'Saturn_Icosphere007',
  Space: 'Space'
}
type OrbitalSpeeds = {
  [key: string]: number
}

const orbitalSpeeds: OrbitalSpeeds = {
  Mercury_Icosphere005: 60 / 172.404,
  Venus_Icosphere004: 60 / 126.108,
  Earth_Icosphere: 60 / 107.244,
  Mars_Icosphere002: 60 / 86.868,
  Jupiter_Icosphere006: 60 / 47.016,
  Saturn_Icosphere007: 60 / 34.705,
  uranus_Icosphere009: 60 / 24.516,
  Neptune_Icosphere010: 60 / 19.548,
  Moon_Icosphere001: 60 / 13.37
}

export { orbitalSpeeds, SOLAR_S }
