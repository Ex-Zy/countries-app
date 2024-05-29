import { useMemo, useState } from 'react'
import { CountryFilterParams } from '../types.ts'
import { mapFilterParamsToCountryFilter } from '../utils.ts'

export const useCountryFilter = () => {
  const [params, setParams] = useState<CountryFilterParams>({
    countryCode: '',
    continentCode: '',
  })

  const countryFilter = useMemo(() => mapFilterParamsToCountryFilter(params), [params])

  const updateFilterParams = (newParams: CountryFilterParams) => {
    setParams(newParams)
  }

  return {
    countryFilter,
    updateFilterParams,
  }
}
