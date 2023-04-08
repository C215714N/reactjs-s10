import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

// Componentes
import Search from './components/search'
import Results from './components/results'
import Pagination from './components/pagination'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
      <Search/>
      <Results/>
      <Pagination/>
    </>
  )
}

export default App
