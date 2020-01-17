import React from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
 import {MovieProvider} from './MovieContext'

function App() {


  return (
    <MovieProvider>
    <div className="App ">
      <Header />
      <Search />
    </div> 
    </MovieProvider>
  );
}

export default App;
