import './CountryCard.scss'
import React from 'react'
import { Country } from '../../gql/graphql.ts'

interface Props {
  country: Country
}

export const CountryCard: React.FC<Props> = ({ country }: Props) => {
  return (
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
  )
}
