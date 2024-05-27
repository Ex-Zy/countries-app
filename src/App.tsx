import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from '@apollo/client'
import { gql } from './__generated__'

const COUNTRY_QUERY = gql(`
    query GetCountry {
        country(code: "UA") {
            code
            name
            capital
        }
    }
`)

function App() {
  const [count, setCount] = useState(0)

  const { loading, data, error } = useQuery(COUNTRY_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  console.log(data, error)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
