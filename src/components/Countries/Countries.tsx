import './Countries.scss'

import { FilterBar } from '../FilterBar/FilterBar.tsx'
import { CountryList } from '../CountryList/CountryList.tsx'
import React from 'react'
import { useCountryFilter } from '../../hooks/useCountryFilter.ts'
import { mapFormEventToFilterParams } from '../../utils.ts'

export const Countries = () => {
  const { countryFilter, updateFilterParams } = useCountryFilter()

  function handleApplyFilter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { countryCode, continentCode } = mapFormEventToFilterParams(event)

    updateFilterParams({
      countryCode,
      continentCode,
    })
  }

  return (
    <div className="countries">
      <div className="container">
        <FilterBar onSubmit={handleApplyFilter} />
        <CountryList filter={countryFilter} />
      </div>
    </div>
  )
}
