import './Countries.scss'

import { FilterBar } from '../FilterBar/FilterBar.tsx'
import { CountryList } from '../CountryList/CountryList.tsx'
import { useCountryFilter } from '../../hooks/useCountryFilter.ts'

export const Countries = () => {
  const { formFilterState, countryFilter, handleFormFilterChange } = useCountryFilter()

  return (
    <>
      <div className="countries">
        <div className="container">
          <FilterBar form={formFilterState} onChange={handleFormFilterChange} />
          <CountryList filter={countryFilter} />
        </div>
      </div>
    </>
  )
}
