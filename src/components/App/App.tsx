import './App.scss'

import { RouterProvider } from 'react-router-dom'
import { router } from '../../router'
import { AppHeader } from '../AppHeader/AppHeader.tsx'

function App() {
  return (
    <>
      <AppHeader />
      <RouterProvider router={router} />
    </>
  )
}

export default App
