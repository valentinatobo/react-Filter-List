import { createContext, useState } from 'react';
import React from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  let [seacrh, setSearch] = useState();

  return (
    <SearchContext.Provider value={{ seacrh, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
