import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

// Componentes
import Search from './components/search'
import Results from './components/results'
import Pagination from './components/pagination'

function App() {
  const [results, setResults] = useState({
    data: [{}],
    pagination: {
      total_count: 0,
      count: 0,
      offset: 0
    }
  })

  async function getData(url){
    let data = await fetch(url);
    data = await data.json();
    setResults(data);
  }

  return(
    <>
      <Search getData={getData}/>
      <Results data={results.data}/>
      <Pagination pagination={results.pagination}/>
    </>
  )
}

export default App
