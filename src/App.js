// Dependencias
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes 
import Nav from './components/nav.js';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Section from './components/section.js'

// Estructura de Datos
import Links from './data/links.json';
import Social from './data/social.json';
import { useState } from 'react';

function App() {
  const state = {
    users: []
  }
  const url = "https://jsonplaceholder.typicode.com/"
  const getData = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setState({users: data}))
  }

  return(
    // Administra la API History
    <BrowserRouter>
      <Nav url={url} appName="cReact" links={Links} action={getData}/>
      <Header/>
      {/* Define los elementos que se alternaran */}
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
