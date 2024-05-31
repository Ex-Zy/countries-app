import { createBrowserRouter } from 'react-router-dom'
import { Countries } from '../components/Countries/Countries.tsx'
import { CountryDetails } from '../components/CountryDetails/CountryDetails.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Countries />,
  },
  {
    path: '/countries/:code',
    element: <CountryDetails />,
  },
])
