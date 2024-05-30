import { CountryFilterParams } from './types.ts'
import { CountryFilterInput } from './gql/graphql.ts'
import React from 'react'

export const mapFormEventToFilterParams = (event: React.FormEvent<HTMLFormElement>): CountryFilterParams => {
  const { country, continents } = event.currentTarget.elements as HTMLFormControlsCollection & {
    country: HTMLInputElement
    continents: HTMLSelectElement
  }

  return {
    countryCode: country.value,
    continentCode: continents.value,
  }
}

export const mapFilterParamsToCountryFilter = (filterParams: CountryFilterParams): CountryFilterInput => {
  const filter: CountryFilterInput = {}

  if (filterParams.countryCode) {
    filter.code = {
      eq: filterParams.countryCode,
    }
  }
  if (filterParams.continentCode) {
    filter.continent = {
      eq: filterParams.continentCode,
    }
  }
  return filter
}
