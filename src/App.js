import React from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Cards />
    </div>
  );
}

export default App;
