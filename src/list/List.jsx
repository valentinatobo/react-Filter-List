
import React from 'react';
import ListView from './ListView'
import { SearchProvider } from '../contexts/SearchContext';
import { ItemsProvider } from '../contexts/ItemContext';
import ResultCount from './ResultsCount';


//componentes de presentación (mostrar datos) y componentes contenedores(manejo de informacion)

function List(){

  return (
    <SearchProvider >
      {/* //trae la lista de los items sin usar props si no context */}
      <ItemsProvider>
        <ResultCount/>
        <ListView/>
      </ItemsProvider>
    </SearchProvider>
    
  
  )
}

export default List;