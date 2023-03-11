// Dependencias
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

// Componentes 
import Nav from './components/nav';
import Header from './components/header';
import Result from './components/result';
import Footer from './components/footer';
import Router from './components/router';

// Estructura de Datos
import Links from './data/links.json';
import Social from './data/social.json';

function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/"
  const appName = "CReactJS"
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
      <Nav url={url} appName={appName} links={Links} action={getData}/>
      <Header appName={appName} action={getData} />
      <main className="container">
        <Result data={ data } />
        <Router data={ data }/>
      </main>
      <Footer links={Social}/>
    </BrowserRouter>
  )
}

export default App;
