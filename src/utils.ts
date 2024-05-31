import { CountryFilterParams } from './types.ts'
import { CountryFilterInput, Subdivision } from './gql/graphql.ts'

export const mapToCountryFilter = (formFilter: CountryFilterParams): CountryFilterInput => {
  const filter: CountryFilterInput = {}

  if (formFilter.countryCode) {
    filter.code = {
      eq: formFilter.countryCode,
    }
  }
  if (formFilter.continentCode) {
    filter.continent = {
      eq: formFilter.continentCode,
    }
  }
  return filter
}

export const truncateSubdivision = (subdivisions: Subdivision[]) => {
  return subdivisions.length > 3
    ? subdivisions
        .map((s) => s.name)
        .slice(0, 3)
        .join(', ')
        .concat('...')
    : subdivisions.map((s) => s.name)
}
