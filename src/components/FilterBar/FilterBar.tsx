import { useQuery } from '@apollo/client'
import { gql } from '../../gql'
import React from 'react'

const GET_SEARCH_COUNTRIES = gql(`
  query GetSearchCountries {
    countries {
      name
      code
    }
  }
`)

const GET_FILTER_BAR_CONTINENTS = gql(`
  query GetFilterBarContinents {
    continents {
      name
      code
    }
  }
`)

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const FilterBar: React.FC<Props> = ({ onSubmit }: Props) => {
  const { data } = useQuery(GET_SEARCH_COUNTRIES)
  const { data: dataContinents } = useQuery(GET_FILTER_BAR_CONTINENTS)

  return (
    <form onSubmit={onSubmit}>
      <div className="search">
        <input list="countries" id="country" name="country" size={20} autoComplete="off" type="text" />
        <datalist id="countries">
          {data?.countries.map((country) => {
            return (
              <option key={country.name} value={country.code}>
                {country.name}
              </option>
            )
          })}
        </datalist>
      </div>
      <div className="fileter">
        <select name="continents">
          {dataContinents?.continents.map((continent) => {
            return (
              <option key={continent.code} value={continent.code}>
                {continent.name}
              </option>
            )
          })}
        </select>
      </div>
    </form>
  )
}
