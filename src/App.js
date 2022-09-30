import React from 'react';
import './style.css';
import List from './list/List';
import { SearchProvider } from './contexts/SearchContext';

export default function App() {
  return (
    <div className="App">
      <h1>Hello desde React!</h1>
      
      <SearchProvider >
        <List />
      </SearchProvider>
    </div>
  );
}
