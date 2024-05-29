import './CountryList.css'
import { useQuery } from '@apollo/client'
import { gql } from '../../gql'
import { CountryFilterInput } from '../../gql/graphql.ts'
import React from 'react'

const GET_COUNTRIES = gql(`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      emoji
      capital
      continent {
        code
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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <p>{data?.countries.length}</p>
      <ul className="country-list">
        {data?.countries.map((country) => {
          return (
            <li key={country.name}>
              <div>
                <h2>{country.name}</h2>
                <p>{country.emoji}</p>
                <p>{country.capital}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
