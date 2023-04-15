import 'bootstrap/dist/css/bootstrap.min.css'

// Componentes
import Search from './components/search'
import Results from './components/results'
import Pagination from './components/pagination'

// Datos Externos
import ContextAPI from './actions/Context'

function App() {
  return(
    <ContextAPI>
      <Search/>
      <Results/>
      <Pagination/> 
    </ContextAPI>
  )
}

export default App
