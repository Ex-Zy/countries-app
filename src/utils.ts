import { CountryFilterParams } from './types.ts'
import { CountryFilterInput } from './gql/graphql.ts'

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
