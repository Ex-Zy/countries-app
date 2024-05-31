import './CountryDetails.scss'
import { useQuery } from '@apollo/client'
import { gql } from '../../gql'
import { CountryDetailsCard } from '../CountryDetailsCard/CountryDetailsCard.tsx'
import { Country } from '../../gql/graphql.ts'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ArrowLeft } from '../ArrowLeft.tsx'
import { CountryDetailsCardSkeleton } from '../CountryDetailsCardSkeleton/CountryDetailsCardSkeleton.tsx'

const GET_COUNTRY_DETAILS = gql(`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      awsRegion
      name
      native
      code
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
      subdivisions {
        name
      }
      phone
    }
  }
`)

export const CountryDetails = () => {
  const { code = '' } = useParams()
  const {
    data = {},
    error,
    loading,
  } = useQuery(GET_COUNTRY_DETAILS, {
    variables: {
      code: code.toUpperCase(),
    },
  })

  return (
    <>
      <div className="country-details">
        <div className="country-details__in container">
          <Link to="/" className="btn-back">
            <ArrowLeft />
            Back
          </Link>
          {loading || error ? <CountryDetailsCardSkeleton /> : <CountryDetailsCard country={data.country as Country} />}
        </div>
      </div>
    </>
  )
}
