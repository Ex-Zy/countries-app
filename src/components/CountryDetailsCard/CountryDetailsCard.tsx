import './CountryDetailsCard.scss'
import { Country } from '../../gql/graphql.ts'
import React from 'react'

interface Props {
  country: Country
}

export const CountryDetailsCard: React.FC<Props> = ({ country }: Props) => {
  return (
    <div className="country-details-card">
      <div className="country-details-card__media">
        <img
          loading="lazy"
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
          alt={country.name}
        />
      </div>
      <div className="country-details-card__info">
        <h2 className="country-details-card__title">{country.name}</h2>
        <ul className="country-details-card__list">
          <li className="country-details-card__item">
            <strong>Native:</strong> {country.native}
          </li>
          <li className="country-details-card__item">
            <strong>Aws region:</strong> {country.awsRegion}
          </li>
          <li className="country-details-card__item">
            <strong>Continent:</strong> {country.continent.name}
          </li>
          <li className="country-details-card__item">
            <strong>Capital:</strong> {country.capital}
          </li>
          <li className="country-details-card__item">
            <strong>Code:</strong> {country.code}
          </li>
          <li className="country-details-card__item">
            <strong>Phone:</strong> {country.phone}
          </li>
          <li className="country-details-card__item">
            <strong>Currency:</strong> {country.currency}
          </li>
          <li className="country-details-card__item">
            <strong>Languages:</strong>
            {country.languages.map((language) => (
              <span key={language.name}>{language.name}</span>
            ))}
          </li>
          <li className="country-details-card__item">
            <strong>Subdivisions:</strong>
            {country.subdivisions.length ? (
              <span>
                {country.subdivisions
                  .map((s) => s.name)
                  .toString()
                  .split(', ')}
              </span>
            ) : (
              'No subdivisions'
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}
