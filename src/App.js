import Nav from './components/nav.js';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Section from './components/section.js'
import Links from './data/links.json';

function App() {
  
  return(
    // No se puede retornar mas de un elemento
    // React.Fragment (permite englobar varios elementos)
    <>
      <Nav appName="cReact" links={Links}/>
      <Header/>
      <Section title="a" content={'section 1'} />
      <Section title="b" content={'section 2'} />
      <Section title="c" content={'section 3'} />
      <Footer/>
    </>
  )
}

export default App;
