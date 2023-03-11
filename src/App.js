// Dependencias
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

// Componentes 
import Nav from './components/nav.js';
import Header from './components/header.js';
import Table from './components/table.js';
import Footer from './components/footer.js';
import Section from './components/section.js';

// Estructura de Datos
import Links from './data/links.json';
import Social from './data/social.json';

function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/"

  const getData = async(url) =>{
    try{
      let data = await fetch(url);
      data = await data.json();
      setData(data)
    }
    catch(e){
      console.log(e)
    }
  }

  return(
    // Administra la API History
    <BrowserRouter>
      <Nav url={url} appName="cReact" links={Links} action={getData}/>
      <Header/>
      {/* Define los elementos que se alternaran */}
      <div className="table-responsive">
        <Table data={data.data ? data.data : data}/>
      </div>
      <Routes>
        <Route path='/users' element={
          <Section title="Bienvenido" content={'section 1'} /> } />
        <Route path="/about" element={
          <Section title="Sobre Nosotros" content={'section 2'} /> } />
        <Route path="/contact" element={
          <Section title="Realiza tu Consulta" content={'section 3'} /> } />
          {/* Especifica el elemento que debe renderizarse */}
        <Route path="*" element={
          <Section title="Error 404" content={
            `no se pudo acceder a esta pagina`
          }/>
        } />
      </Routes>
      <Footer links={Social}/>
    </BrowserRouter>
  )
}

export default App;
