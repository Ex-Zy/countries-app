import './Countries.scss'

import { FilterBar } from '../FilterBar/FilterBar.tsx'
import { CountryList } from '../CountryList/CountryList.tsx'
import { useCountryFilter } from '../../hooks/useCountryFilter.ts'
import { CountryFilterParams } from '../../types.ts'

export const Countries = () => {
  const { formFilterState, countryFilter, updateFormFilterState } = useCountryFilter()

  function handleFilterFormChange({ countryCode, continentCode }: CountryFilterParams) {
    updateFormFilterState({
      countryCode,
      continentCode,
    })
  }

  return (
    <div className="countries">
      <div className="container">
        <FilterBar form={formFilterState} onChange={handleFilterFormChange} />
        <CountryList filter={countryFilter} />
      </div>
    </div>
  )
}
