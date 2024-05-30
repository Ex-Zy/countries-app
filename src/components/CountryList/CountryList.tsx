import './CountryList.scss'
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

  return (
    <>
      <p>{data?.countries.length}</p>
      <ul className="country-list">
        {data?.countries.map((country) => {
          return (
            <li key={country.name} className="country-list__item">
              <div className="country-card">
                <figure className="country-card__media">
                  <img
                    loading="lazy"
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                    alt={country.name}
                  />
                </figure>
                <article className="country-card__content">
                  <h2 className="country-card__title">{country.name}</h2>
                  <dl className="dl-country">
                    <dt className="dl-country__dt">Code:</dt>
                    <dd className="dl-country__dd">{country.code}</dd>
                  </dl>
                  <dl className="dl-country">
                    <dt className="dl-country__dt">Region:</dt>
                    <dd className="dl-country__dd">{country.continent.name}</dd>
                  </dl>
                  <dl className="dl-country">
                    <dt className="dl-country__dt">Capital:</dt>
                    <dd className="dl-country__dd">{country.capital}</dd>
                  </dl>
                </article>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
