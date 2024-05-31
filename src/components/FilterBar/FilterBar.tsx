import './FilterBar.scss'

import { useQuery } from '@apollo/client'
import { gql } from '../../gql'
import React from 'react'
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { CountryFilterParams } from '../../types.ts'

const GET_SEARCH_COUNTRIES = gql(`
  query GetSearchCountries {
    countries {
      name
      code
    }
  }
`)

const GET_FILTER_BAR_CONTINENTS = gql(`
  query GetFilterBarContinents {
    continents {
      name
      code
    }
  }
`)

interface Props {
  form: CountryFilterParams
  onChange: (filterParams: CountryFilterParams) => void
}

export const FilterBar: React.FC<Props> = ({ form, onChange }: Props) => {
  const { data } = useQuery(GET_SEARCH_COUNTRIES)
  const { data: dataContinents } = useQuery(GET_FILTER_BAR_CONTINENTS)

  return (
    <form className="filter-bar" onSubmit={(e) => e.preventDefault()}>
      <Autocomplete
        disablePortal
        options={data?.countries || []}
        getOptionLabel={(option) => option.name}
        sx={{ width: 480 }}
        renderInput={(params) => <TextField {...params} label="Search for a country…" />}
        onChange={(_, value) => {
          onChange({ ...form, countryCode: value?.code ?? '' })
        }}
      />
      <FormControl sx={{ width: 200 }} size="medium">
        <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="name"
          value={form.continentCode}
          onChange={(event) => {
            onChange({ ...form, continentCode: event.target.value })
          }}
        >
          {dataContinents?.continents.map((continent) => {
            return (
              <MenuItem key={continent.code} value={continent.code}>
                {continent.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </form>
  )
}
