import './CountryList.scss'
import { useQuery } from '@apollo/client'
import { gql } from '../../gql'
import { Country, CountryFilterInput } from '../../gql/graphql.ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { CountryCard } from '../CountryCard/CountryCard.tsx'

const GET_COUNTRIES = gql(`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      emoji
      capital
      code
      continent {
        name
      }
    }
  }
`)

interface Props {
  filter: CountryFilterInput
}

export const CountryList: React.FC<Props> = ({ filter }: Props) => {
  const { data, error, loading } = useQuery(GET_COUNTRIES, {
    variables: {
      filter,
    },
  })

  if (loading) {
    return <div className="country-list-loading">Loading...</div>
  }

  if (error) {
    return <div className="country-list-error">Error: {error.message}</div>
  }

  if (!data?.countries.length) {
    return <div className="country-list-empty">No data</div>
  }

  return (
    <>
      <ul className="country-list">
        {data?.countries.map((country) => {
          return (
            <li key={country.name} className="country-list__item">
              <Link to={`/countries/${country.code.toLowerCase()}`} className="country-list__link">
                <CountryCard country={country as Country} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
