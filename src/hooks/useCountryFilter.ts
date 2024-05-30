import { useMemo, useState } from 'react'
import { CountryFilterParams } from '../types.ts'
import { mapToCountryFilter } from '../utils.ts'

export const useCountryFilter = () => {
  const [formFilterState, setFormFilterState] = useState<CountryFilterParams>({
    countryCode: '',
    continentCode: '',
  })

  const countryFilter = useMemo(() => mapToCountryFilter(formFilterState), [formFilterState])

  function handleFormFilterChange(filter: CountryFilterParams) {
    setFormFilterState(filter)
  }

  return {
    formFilterState,
    countryFilter,
    handleFormFilterChange,
  }
}
